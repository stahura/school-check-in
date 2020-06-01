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
    students: [],
    rows: []
  };

  // GET STUDENT DATA WHEN COMPONENT MOUNTS
  componentDidMount() {
    this.createUniqueID();
    this.getStudentData()
  }

  createUniqueID = () => {
    //From https://gist.github.com/gordonbrander/2230317
    let id = Math.random().toString(36).substr(2, 15);
    console.log(id);
    return id;
  };

  getStudentData = async () => {
    const db = firebase.firestore();
    let students = [...this.state.students]

    await db.collection("students").get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        students.push(doc.data())
      });
    });

    console.log("students", students)
    this.state.students = students
    this.setState({ students })
    this.testfunc()

  };

  testfunc = () => {
    console.log("students: => ")
    let students = this.state.students
    let rows = this.state.rows
    let i = 0
    for (i in students) {
      let firstName = students[i].firstName
      let middleName = students[i].middleName
      let lastName = students[i].lastName
      let id = students[i].id
      let guardianOne = "Jeff"
      let guardianTwo = "Jen"

      rows.push({ firstName, lastName, id, guardianOne, guardianTwo })
    }
    this.setState({ rows })
    console.log("rows", rows)
  }

  render() {
    return (
      <StudentsContent
        addNewStudent={this.addNewStudent}
        createUniqueID={this.createUniqueID}
        students={this.state.students}
        rows={this.state.rows}
      />
    );
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
