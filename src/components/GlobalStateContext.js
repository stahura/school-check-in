import React, { useEffect, useState,useContext } from "react"
import firebase from "../firebase"


export const GlobalStateContext = React.createContext();

export const StateProvider = ({ children }) => {

    const [students, setStudents] = useState([])
    const [rows,setRows] = useState([])
    const [count,setCount] = useState(0)
    const db = firebase.firestore();

    
    useEffect(() => {
        
    })

    // const copyStudentToRows = () => {
    //     let tempStudents = students
    //     let tempRows = rows
    //     let i = 0
    //     for (i in tempStudents) {
    //       let firstName = students[i].firstName
    //       //let middleName = students[i].middleName
    //       let lastName = students[i].lastName
    //       let id = students[i].id
    //       let guardianOne = "Jeff"
    //       let guardianTwo = "Jen"
    //       let checkedIn = students[i].checkedIn
    
    //       tempRows.push({ firstName, lastName, id, guardianOne, guardianTwo, checkedIn })
    //     }
    //     setRows({tempRows})
    //     setTimeout(() => {
    //         copyStudentToRows()
    //     },2000)
        
    // }
    
    const getStudentData = async () => {
    
        let tempStudents = []
    
        await db.collection("students").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            tempStudents.push(doc.data())
        });
        });
    
        setStudents({tempStudents})
    
    };
   
    getStudentData();
    console.log("returning global state context",students,rows)
    return (
        <GlobalStateContext.Provider  value={{ students,setStudents }} >
            {children}
        </GlobalStateContext.Provider>
    )
}