import React, { useState, useEffect,Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ResponsiveAppDrawer from "../shared-components/ResponsiveAppDrawer";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import firebase from "../firebase";
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Route, NavLink, HashRouter } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: 900,
    zIndex: '1',
    
    marginLeft: '300px',
    marginTop: '100px',
    [theme.breakpoints.down("md")]: {
      width: '95%',
      margin: '0 auto',
      marginTop: '100px',
    },
    
  },
  content: {
    display: "flex",
    width: "100%",
    zIndex: '1',
  },
  header: {
    textAlign: "center",
    zIndex: '1',
  },
  alert: {
    position: 'absolute',
    zIndex: '2',
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),

    },
  },
}));

const StyledPaper = styled(Paper)`
  width: 95%;
  margin: 0 auto;
  margintop: 0;
`;

const AddStudent = (props) => {
  //https://levelup.gitconnected.com/react-hooks-usestate-and-useeffect-2d0b870c654f
  //The following has to be done to prevent infinite loop but I don't get it
  //https://medium.com/@andrewmyint/infinite-loop-inside-useeffect-react-hooks-6748de62871
  const [open, setOpen] = React.useState(false);
  const [studentID, setNewID] = useState("");
  const [newfirstName, setFirstName] = useState("");
  const [newmiddleName, setMiddleName] = useState("");
  const [newlastName, setLastName] = useState("");
  const [newguardianFirst, setGuardianFirst] = useState("");
  const [newguardianLast, setGuardianLast] = useState("");
  const [newguardianEmail, setGuardianEmail] = useState("");
  const [newguardianNumber, setGuardianNumber] = useState("");
  const [test, setTest] = useState(0); //Seems I just need an array that doesn't change to prevent infinite loop.. hence the name test

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createUniqueID = () => {
    //From https://gist.github.com/gordonbrander/2230317
    let id = Math.random().toString(36).substr(2, 15);
    console.log(id);
    return id;
  };

  const handleNewID = () => {
    let uid = createUniqueID();

    setNewID(uid);
    console.log("handleNewID: ", uid);
  };

  const updateNewStudentInfo = (e) => {
    let value = e.currentTarget.value;
    let id = e.currentTarget.id;

    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "middleName") {
      setMiddleName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "guardianFirst") {
      setGuardianFirst(value);
    }
    if (id === "guardianLast") {
      setGuardianLast(value);
    }
    if (id === "guardianEmail") {
      setGuardianEmail(value);
    }
    if (id === "guardianNumber") {
      setGuardianNumber(value);
    }
  };

  const sendStudentInfoToDB = () => {
    const db = firebase.firestore();

    //db.collection("students").doc(studentID)
    db.collection("students")
      .doc(studentID)
      .set({
        firstName: newfirstName,
        middleName: newmiddleName,
        lastName: newlastName,
        id: studentID
      })
      .then(function () {
        console.log("Student was saved");
      })
      .catch(function (error) {
        console.error(error);
      });
    //db.collection("students").doc(studentID).collection("guardians").doc('guardianOne')
    db.collection("students")
      .doc(studentID)
      .collection("guardians")
      .doc("guardianOne")
      .set({
        firstName: newguardianFirst,
        lastName: newguardianLast,
        number: newguardianNumber,
        email: newguardianEmail,
      })
      .then(function () {
        console.log("priorities were saved");
      })
      .catch(function (error) {
        console.error(error);
      });

    handleClickOpen();
    //props.reRenderTable()
    let tempStudent = {        
      firstName: newfirstName,
      middleName: newmiddleName,
      lastName: newlastName,
      id: studentID}
    
    let tempStudents = props.students
    tempStudents.push(tempStudent)

    props.addNewStudentToState(tempStudents)
  };

  useEffect(() => {
    //GENERATE UNIQUE ID FOR STUDENT WHEN COMPONENT RENDERS
    //https://medium.com/@bopaiahmd.mca/how-to-pass-props-using-link-and-navlink-in-react-router-v4-75dc1d9507b4

    handleNewID();
  }, []);

  const classes = useStyles();

  return (
    <Fragment>
      <ResponsiveAppDrawer />
      <div className={classes.root}>
        
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Student Creation"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              The student has been successfully created
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <NavLink to="/students">
              <Button onClick={handleClose} color="primary" autoFocus>
                Okay
            </Button>
            </NavLink>
          </DialogActions>
        </Dialog>
        <div className={classes.content}>
          <StyledPaper elevation={20}>
            <h2 className={classes.header}>Adding New Student</h2>
            <Card>
              <CardContent>
                <form>
                  <h3>Student Info</h3>
                  <TextField
                    id="firstName"
                    label="First Name"
                    style={{ margin: 8 }}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    onChange={updateNewStudentInfo}
                  />
                  <TextField
                    id="middleName"
                    label="Middle Name"
                    style={{ margin: 8 }}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    onChange={updateNewStudentInfo}
                  />
                  <TextField
                    id="lastName"
                    label="Last Name"
                    style={{ margin: 8 }}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    onChange={updateNewStudentInfo}
                  />
                  <TextField
                    id="uniqueID"
                    label="Student ID"
                    style={{ margin: 8 }}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    value={studentID}
                  />
                  <h3>Guardian Information</h3>
                  <TextField
                    id="guardianFirst"
                    label="First Name"
                    style={{ margin: 8 }}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    onChange={updateNewStudentInfo}
                  />
                  <TextField
                    id="guardianLast"
                    label="Last Name"
                    style={{ margin: 8 }}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    onChange={updateNewStudentInfo}
                  />
                  <TextField
                    id="guardianEmail"
                    label="Email"
                    style={{ margin: 8 }}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    onChange={updateNewStudentInfo}
                  />
                  <TextField
                    id="guardianNumber"
                    label="Phone Number"
                    style={{ margin: 8 }}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    onChange={updateNewStudentInfo}
                  />
                  <Button onClick={sendStudentInfoToDB}>Submit</Button>
                </form>
              </CardContent>
            </Card>
          </StyledPaper>
        </div>
      </div >
    </Fragment>
  );
};

export default AddStudent;

/*
const sendStudentInfoToDB = () => {
        const db = firebase.firestore()

        //db.collection("students").doc(studentID)
        db.collection("students").doc(studentID).collection("personal").doc("profile").set({
            firstName: newfirstName,
            middleName: newmiddleName,
            lastName: newlastName
        })
            .then(function () {
                console.log("Student was saved")
            })
            .catch(function (error) {
                console.error(error)
            })
        //db.collection("students").doc(studentID).collection("guardians")
        db.collection("students").doc(studentID).collection("personal").doc("profile").collection("guardianOne").doc("personal").set({
            firstName: newguardianFirst,
            lastName: newguardianLast,
            number: newguardianNumber,
            email: newguardianEmail
         })
             .then(function () {
                console.log("priorities were saved")
            })
            .catch(function (error) {
                console.error(error)
            })
    }
*/
