import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom"
import { AuthContext } from "./auth"

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {

    const { currentUser } = useContext(AuthContext)
    console.log("CurrentUser is: ", currentUser)
    return (
        <Route
            {...rest}
            render={routeProps => !!currentUser ? (<RouteComponent {...routeProps} val={currentUser.uid} />
            ) : (<Redirect to={"/login"} />)}
        />
    )
}

export default PrivateRoute