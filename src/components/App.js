import React , {useState,useEffect} from "react"
import Login from "../components/Login"
import CheckedInTable from "../components/CheckedInTable"
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
   const db = firebase.firestore();

   const getStudentData = async () => {
    
        let tempStudents = []

        await db.collection("students").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                let student = doc.data()
                tempStudents.push(student)
                console.log("TEMPSTUDENTS is => ",tempStudents)
                
            });
        });

        setStudents(tempStudents)
        console.log("Students is :",students)
        
        setStudentsLoaded(true)
    };

    useEffect(()=> {
        console.log('triggering useEffect')
        if(studentsLoaded === false) {
            getStudentData()
        }
    
        //https://stackoverflow.com/questions/54675523/state-inside-useeffect-refers-the-initial-state-always-with-react-hooks
        //https://dmitripavlutin.com/react-hooks-stale-closures/
    },[students])
    
    return(
        <AuthProvider>
        <BrowserRouter  >
            <Switch>
                <PrivateRoute 
                    path={"/students"} 
                    component={() => <Students state={students} />} 
                />
                <PrivateRoute 
                    path="/addStudents" 
                    component={() => <AddStudent state={students} />} 
                />
                <PrivateRoute 
                    exact path="/" 
                    component={() => <Home students={students} />} 
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

