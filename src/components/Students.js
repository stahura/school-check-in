import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ResponsiveAppDrawer from "../shared-components/ResponsiveAppDrawer";
import "../styles/global.css";
import "../styles/global.css";
import AllStudentsTable from "./AllStudentsTable"


const useStyles = makeStyles((theme) => ({
  root: {
      marginTop: '100px',
  },
  appdrawerPlaceholder: {
    backgroundColor: 'red',
    width: '220px',
    height:'100%',
    [theme.breakpoints.down("md")]: {
      width: '0',
      height: '0'
    },
  },
  grid: {
    display: 'grid',
    gridGap: '20px',
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: '1fr ',
      gridGap: '20px'
    },
  },
  

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

