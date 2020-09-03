import React,{useState} from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import ResponsiveAppDrawer from "../shared-components/ResponsiveAppDrawer";
import "../styles/global.css";
import MaterialTableDemo from "../shared-components/Datatable";
import { Route, NavLink, HashRouter } from "react-router-dom";
import "../styles/global.css";
import styled from "styled-components";
import StudentsTable from "../shared-components/StudentsTable";
import firebase from "../firebase";
import AllStudentsTable from "./AllStudentsTable"


const useStyles = makeStyles((theme) => ({
  root: {
      marginTop: '100px',
  }

}))

const Students = (props) => {
  const classes = useStyles()
  
    
  return(
    <div>
      <div className={classes.root}>
        <ResponsiveAppDrawer />
        <AllStudentsTable key={props.studentTableKey} handleCheckout={props.handleCheckout} handleCheckin={props.handleCheckin} students={props.students} />
      </div>
    </div>
  )
}

export default Students;

/*
        let studentID  = id
        let students = db.collection('students')
        let currentStudent = students.doc(studentID)
        let studentProfile = currentStudent.collection('personal').collection.doc('profile').getData()

        if (studentProfile.exists) {
            console.log("Document data:", studentProfile.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }

*/
