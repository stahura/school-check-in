import firebase from "firebase"

const config = {
    apiKey: "AIzaSyDAEifQSP26-aT1IUC9fFCPvaOlaFJhlwA",
    authDomain: "school-check-in-10062.firebaseapp.com",
    databaseURL: "https://school-check-in-10062.firebaseio.com",
    projectId: "school-check-in-10062",
    storageBucket: "school-check-in-10062.appspot.com",
    messagingSenderId: "428077651619",
    appId: "1:428077651619:web:639f7ad048f1f0d9b99116",
    measurementId: "G-73VG1KWBD9"
}


// Initialize Firebase
firebase.initializeApp(config)
export default firebase;