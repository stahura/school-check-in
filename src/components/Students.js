import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import ResponsiveAppDrawer from "../shared-components/ResponsiveAppDrawer";
import "../styles/global.css";
import MaterialTableDemo from "../shared-components/Datatable";
import { Route, NavLink, HashRouter } from "react-router-dom";
import "../styles/global.css";
import styled from "styled-components";
import StudentsTable from "../shared-components/StudentsTable";
import Button from "@material-ui/core/button";
import firebase from "../firebase";
import StudentsContent from "./StudentsContent";

class Students extends React.Component {
  state = {
    students: ["tgPFur0YRbY5jR674H8c"],
  };

  // GET STUDENT DATA WHEN COMPONENT MOUNTS
  componentDidMount() {
    this.getStudentData(this.state.students[0]);
    this.createUniqueID();
  }

  createUniqueID = () => {
    //From https://gist.github.com/gordonbrander/2230317
    let id = Math.random().toString(36).substr(2, 15)
    console.log(id)
    return id
  }

  addNewStudent = () => {
    const db = firebase.firestore();
    let newID = this.createUniqueID()

    

  }

  getStudentData = (id) => {
    const db = firebase.firestore();
    let currentStudentID = id;
    let currentStudentProfileDocRef = db
      .collection("students")
      .doc(currentStudentID)
      .collection("personal")
      .doc("profile");
    let currentStudentDocRef = db.collection("students").doc(currentStudentID);

    currentStudentDocRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          let dbEntries = Object.keys(doc.data());
          console.log("Exists: ", doc.data());
          console.log("Entries: ", dbEntries);
        } else {
          console.log("doesn't exist");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return <StudentsContent addNewStudent={this.addNewStudent} createUniqueID={this.createUniqueID} students={this.state.students} />;
  }
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
        }*/
