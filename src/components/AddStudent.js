import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import ResponsiveAppDrawer from "../shared-components/ResponsiveAppDrawer";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      marginTop: '80px',
      width: '100%'
    },
    content: {
        display: "flex",
        width: '100%'
    },
    header: {
        textAlign: 'center'
    }
  }));

const StyledPaper = styled(Paper)`
  width: 95%;
  margin: 0 auto;
  marginTop: 0
  
`

const AddStudent = () => {
    const classes = useStyles()

    return(
        <div className={classes.root}>
            <ResponsiveAppDrawer />
            <div className={classes.content}>
                <StyledPaper>
                    <h2 className={classes.header}>Adding New Student</h2>
                </StyledPaper>
            </div>
        </div>
        )
}

export default AddStudent