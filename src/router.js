import React from "react"
import Login from "./components/Login"
import PrivateRoute from "./privateRoute"
import { AuthProvider } from "./auth"
import Home from "./components/Home"
import {
    Route,
    BrowserRouter,
    Switch
} from "react-router-dom";

const Router = () => (

    <AuthProvider>
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    </AuthProvider>
)

export default Router;