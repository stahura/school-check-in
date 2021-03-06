import React , {useState,useEffect} from "react"
import Login from "../components/Login"
import PrivateRoute from "../privateRoute"
import { AuthProvider } from "../auth"
import Home from "../components/Home"
import Students from "../components/Students"
import {
    Route,
    BrowserRouter,
    Switch
} from "react-router-dom";
import AddStudent from "../components/AddStudent"
import firebase from "../firebase"


const App = () => {

   const [students,setStudents] = useState([])
   const [studentsLoaded,setStudentsLoaded] = useState(false)
   const [checkedInStudents,setCheckedInStudents] = useState([])
   const [tableKeyTwo, setTableKeyTwo] = useState(10)
  

   const db = firebase.firestore();

   const getStudentData = async () => {
    
        let tempStudents = []

        await db.collection("students").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {

                let student = doc.data()
                tempStudents.push(student)
                
            });
        });

        let tempchecked = tempStudents.filter(student => student.checkedIn == true)
        setCheckedInStudents(tempchecked)
        setStudents(tempStudents)
        console.table(checkedInStudents)
        console.table(students)
        setStudentsLoaded(true)
    };

    const sendNewCheckInStatusToDB = async (id, status) => {
        const db = firebase.firestore();
    
    
        await db.collection("students")
          .doc(id)
          .update({
            checkedIn: status
          })
          .then(function () {
            console.log("Student was saved");
          })
          .catch(function (error) {
            console.error(error);
          });
    
    
    };

    const sendNewCheckOutStatusToDB = async (id, status) => {
        const db = firebase.firestore();
    
        await db.collection("students")
          .doc(id)
          .update({
            checkedIn: status
          })
          .then(function () {
            console.log("Student was saved");
          })
          .catch(function (error) {
            console.error(error);
          });
    
    
      };

    const handleCheckin = (e) => {
        console.log("printing e", e)
        console.log("printing e.currentTarget", e.currentTarget)
        console.log("printing e.currentertarget.parentNode", e.currentTarget.parentNode)
        console.log("printing e.currentertarget.parentNode.parentNode", e.currentTarget.parentNode.parentNode)
        console.log("printing e.currentertarget.parentNode.parentNode.children[4]", e.currentTarget.parentNode.parentNode.children[4].id)
        
        let selectedStudentId = e.currentTarget.parentNode.parentNode.children[4].id
        let tempStudents = students
        let i = 0
        for (i in tempStudents) {
          if (tempStudents[i].id === selectedStudentId) {
            tempStudents[i].checkedIn = true
            sendNewCheckInStatusToDB(selectedStudentId, true)
          }
        }
        //console.table(tempStudents)
        setStudents(tempStudents)
        //console.table(students)

        reRenderTable()
        //console.table(tempStudents)
        //console.table(students)
    }

    const handleCheckOut = (e) => {
        console.log(e.currentTarget.parentNode.parentNode.children[2].id)
        let selectedStudentId = e.currentTarget.parentNode.parentNode.children[4].id
        let tempStudents = students
        let i = 0

        for (i in tempStudents) {
          if (tempStudents[i].id === selectedStudentId) {
            tempStudents[i].checkedIn = false
            sendNewCheckOutStatusToDB(selectedStudentId, false)
          }
        }
        //console.table(tempStudents)
        setStudents(tempStudents)
        //console.table(students)

        reRenderTable()
        //console.table(tempStudents)
        //console.table(students)
    
      }

    useEffect(()=> {
        console.log('triggering useEffect')
        if(studentsLoaded === false) {
            getStudentData()
        }
    
        //https://stackoverflow.com/questions/54675523/state-inside-useeffect-refers-the-initial-state-always-with-react-hooks
        //https://dmitripavlutin.com/react-hooks-stale-closures/
    },[students,checkedInStudents])

    const reRenderTable = () => {
        setTableKeyTwo(tableKeyTwo + 1)
        
    }

    const addNewStudentToState = (tempStudents) => {
        setStudentsLoaded(false)
        console.log("adding tempStudent")
        setStudents(tempStudents)
    }
    
    
    return(
    <AuthProvider>
        <BrowserRouter  >
            <Switch>
                <PrivateRoute 
                    path="/students" 
                    component={() => <Students addNewStudentToState={addNewStudentToState} reRenderTable={reRenderTable} studentTableKey={tableKeyTwo} handleCheckout={handleCheckOut} handleCheckin={handleCheckin} students={students} />} 
                />
                <PrivateRoute 
                    path="/addStudents" 
                    component={() => <AddStudent addNewStudentToState={addNewStudentToState} students={students} />} 
                />
                <PrivateRoute 
                    exact path="/" 
                    component={() => <Home checkedInStudents={checkedInStudents} setCheckedInStudents={setCheckedInStudents} />} 
                />
                <Route 
                    path="/login" 
                    component={Login} 
                />
            </Switch>
        </BrowserRouter>
    </AuthProvider>
        
    )
}

export default App

