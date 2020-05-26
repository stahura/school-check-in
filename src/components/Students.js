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
    display: 'flex',
    width: '100%',
    justifyContent: "flex-end",
    marginBottom: '5px'
  },
  item: {
      margin: '5px'
  }
}));

const StyledPaper = styled(Paper)`
  width: 100%;
  margin: 0 auto;
  margintop: 0;
`;

const Students = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <ResponsiveAppDrawer />
        <div className={classes.content}>
          <StyledPaper elevation={5}>
            <div>
              <h2 className={classes.contentHeader}>All Students</h2>
              <div className={classes.buttonFlex}>
                <NavLink to="/addStudents"><Button className={classes.item} color="Primary" variant="contained">
                  Add Students
                </Button>
                </NavLink>
                <Button className={classes.item} color="Primary" variant="contained">
                  Remove Students
                </Button>
              </div>
              <div>
                <StudentsTable />
              </div>
            </div>
          </StyledPaper>
        </div>
      </div>
    </div>
  );
};

export default Students;
