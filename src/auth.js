import React, { useEffect, useState } from "react"
import firebase from "./firebase"


export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    var Spinner = require('react-spinkit');


    const [pending, setPending] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);
    
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
          setCurrentUser(user)
          setPending(false)
        });
      }, []);
    
      if(pending){
        return(
            <div style={{display:'grid',justifyItems: 'center',marginTop: '300px'}}>
                <Spinner name="folding-cube" color="blue" />
            </div>
        )

      }
    
    
    return (
        <AuthContext.Provider  value={{ currentUser }} >
            {children}
        </AuthContext.Provider>
    )
}