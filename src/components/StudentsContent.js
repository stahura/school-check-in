import React, { useState, useEffect } from "react";
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
import AddStudent from "./AddStudent";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3),
    marginTop: "60px",
    [theme.breakpoints.down("sm")]: {
      width: "60%",
    },
  },
  contentHeader: {
    textAlign: "center",
  },
  buttonFlex: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    marginBottom: "5px",
  },
  item: {
    margin: "5px",
  },
}));

const StyledPaper = styled(Paper)`
    width: 100%;
    margin: 0 auto;
    margintop: 0;
`;




const StudentsContent = (props) => {

  const [key, setKey] = useState([0])

  const generateKey = () => {
    key.push(Date.now())
    setKey(key)

  }

  useEffect(() => {
    //GENERATE UNIQUE ID FOR STUDENT WHEN COMPONENT RENDERS
    //BECAUSE IT IS NOT RENDERED BUT INSTEAD PASSED THROUGH NAVLINK, FUNCTION IS PASSED INTO LOCATION
    //https://medium.com/@bopaiahmd.mca/how-to-pass-props-using-link-and-navlink-in-react-router-v4-75dc1d9507b4

    // generateKey()

  }, []);


  let classes = useStyles()
  return (
    <div>
      <div className={classes.root}>
        <ResponsiveAppDrawer />
        <div className={classes.content}>
          <StyledPaper elevation={5}>
            <div>
              <h2 className={classes.contentHeader}>All Students</h2>
              <div className={classes.buttonFlex}>
                {/*<NavLink to="/addStudents">*/}
                <NavLink to={{ pathname: '/addStudents', createUniqueID: props.createUniqueID, addNewStudent: props.addNewStudent }}>
                  <Button
                    className={classes.item}
                    color="secondary"
                    variant="contained"
                  >
                    Add Students
                        </Button>
                </NavLink>
                <Button
                  className={classes.item}
                  color="secondary"
                  variant="contained"
                  style={{color: 'white'}}
                >
                  Remove Students
                    </Button>
              </div>
              <div>
                <StudentsTable
                  sendNewCheckInStatusToDB={props.sendNewCheckInStatusToDB}
                  handleCheckInClick={props.handleCheckInClick}
                  rows={props.rows}
                  students={props.students}
                  handleCheckOutClick={props.handleCheckOutClick}
                  genKey={generateKey}
                  key={key}
                  getData={props.getData}
                  changeKey={props.changeKey}
                />
              </div>
            </div>
          </StyledPaper>
        </div>
      </div>
    </div>
  )

}

export default StudentsContent