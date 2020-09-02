import React from "react"
import Login from "./components/Login"
import PrivateRoute from "./privateRoute"
import { AuthProvider } from "./auth"
import { StateProvider } from "./components/GlobalStateContext"
import Home from "./components/Home"
import App from "./components/App"
import Students from "./components/Students"
import {
    Route,
    BrowserRouter,
    Switch
} from "react-router-dom";
import AddStudent from "./components/AddStudent"
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./styles/theme"

const Router = (props) => {


    return (
        <MuiThemeProvider theme={theme}>
            <AuthProvider>
                <BrowserRouter  >
                    <Switch>
                        
                        <PrivateRoute path={"/students"} component={Students} />
                        <PrivateRoute path="/addStudents" component={AddStudent} />
                        <PrivateRoute exact path="/" component={App} />
                        <Route path="/login" component={Login} />
                        
                    </Switch>
                </BrowserRouter>
            </AuthProvider>
        </MuiThemeProvider>
    )

}

export default Router;