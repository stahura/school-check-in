import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from "react-router";
import Paper from '@material-ui/core/Paper';
import styled from "styled-components";
import { AuthContext } from "../auth"
import TextField from "@material-ui/core/TextField"
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import firebase from "../firebase"


const useStyles = makeStyles({
    root: {
        color: 'black',
        backgroundColor: '#82b1ff',

    },
    loginTitle: {
        color: "black",
        padding: '5px',
        maxWidth: '100%',
        backgroundColor: '#82b1ff',
        textAlign: 'center',
        marginTop: "10px"

    },
    forgotPw: {
        marginLeft: '10px',
        textDecoration: 'underline'
    },
    signUpLink: {
        marginTop: '0px',
        color: '#5c6bc0',
        textDecoration: 'underline'
    },
    container: {
        marginTop: '200px',
    }

})

const StyledPaper = styled(Paper)`
    margin: 0 auto;
    padding-bottom: 10px;
    max-width: 80%;
`
const StyledButton = styled(Button)`
    margin-top: 15px;
`

const StyledField = styled(TextField)`
width: 80%;
`

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`



const Login = ({ history }) => {
    const classes = useStyles()
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements
            
            console.log("Email,password:",email,password)
            console.log("event target:",event.target.elements)
            try {
                await firebase
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value)
                history.push("/")
            } catch (error) {
                alert(error)
            }
        },
        [history]
    )

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />
    }

    return (

    <div className={classes.container} >
        
        <StyledPaper elevation={20}>
            <form onSubmit={handleLogin}>
                <h2 className={classes.loginTitle}>ADMIN LOGIN</h2>
                <StyledDiv>

                
                    
                    <StyledField
                        type="email"
                        name="email"
                        style={{ margin: 8 }}
                        placeholder="Enter your username..."
                        InputLabelProps={{
                            shrink: true,
                        }}
                        label="Username"
                        variant="outlined"
                         >
                    </StyledField>
               
                        
                    <StyledField
                        type="password"
                        name="password"
                        style={{ margin: 8 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        label="Password"
                        placeholder="Enter your password..."
                        variant="outlined"
                         >
                    </StyledField>
                    
                </StyledDiv>
                
                <StyledDiv>
                    <StyledButton classes={{ root: classes.root }} type="submit">Submit</StyledButton>
                </StyledDiv>
            </form>


        </StyledPaper>
    </div >
        
        
    )
}

export default withRouter(Login);

/*
√
*/