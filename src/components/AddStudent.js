import React, { useState, useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import ResponsiveAppDrawer from "../shared-components/ResponsiveAppDrawer";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField"
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import firebase from "../firebase"

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

const AddStudent = (props) => {

    //https://levelup.gitconnected.com/react-hooks-usestate-and-useeffect-2d0b870c654f
    const [currentID, setNewID] = useState("abc")
    const handleNewID = (newID) => {
        setNewID(newID)
        console.log("handleNewID: ",currentID)
    }

    useEffect(() => {
        //GENERATE UNIQUE ID FOR STUDENT WHEN COMPONENT RENDERS
        //BECAUSE IT IS NOT RENDERED BUT INSTEAD PASSED THROUGH NAVLINK, FUNCTION IS PASSED INTO LOCATION
        //https://medium.com/@bopaiahmd.mca/how-to-pass-props-using-link-and-navlink-in-react-router-v4-75dc1d9507b4

        let uid = props.location.createUniqueID()
        handleNewID(uid)
        console.log("UseEffect: ",uid)
      },[currentID]);

    const classes = useStyles()

    return(
        <div className={classes.root}>
            <ResponsiveAppDrawer />
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
                                    style={{margin: 8}}
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                                <TextField
                                    id="middleName"
                                    label="Middle Name"
                                    style={{margin: 8}}
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                                <TextField
                                    id="lastName"
                                    label="Last Name"
                                    style={{margin: 8}}
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                                <TextField
                                    id="uniqueID"
                                    label="Student ID"
                                    style={{margin: 8}}
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{readOnly: true}}
                                    variant="outlined"
                                />
                                <h3>Guardian Information</h3>
                                <TextField
                                    id="guardianFirst"
                                    label="First Name"
                                    style={{margin: 8}}
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                                <TextField
                                    id="guardianLast"
                                    label="Last Name"
                                    style={{margin: 8}}
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                                <TextField
                                    id="guardianEmail"
                                    label="Email"
                                    style={{margin: 8}}
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                                <TextField
                                    id="guardianPhone"
                                    label="Phone Number"
                                    style={{margin: 8}}
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                            </form>
                        </CardContent>
                    </Card>
                </StyledPaper>
            </div>
        </div>
        )
}

export default AddStudent