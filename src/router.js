import React from "react"
import Login from "./components/Login"
import PrivateRoute from "./privateRoute"
import { AuthProvider } from "./auth"
import Home from "./components/Home"
import Students from "./components/Students"
import {
    Route,
    BrowserRouter,
    Switch
} from "react-router-dom";
import AddStudent from "./components/AddStudent"

const Router = (props) => (

    <AuthProvider>
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/students" component={Students} />
                <PrivateRoute path="/addStudents" component={AddStudent} />
            </Switch>
        </BrowserRouter>
    </AuthProvider>
)

export default Router;