import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD0uKKiqFrICRBGoG_ri_AzaZSVn-J8jq4",
    authDomain: "todo-react-firebase-app.firebaseapp.com",
    databaseURL: "https://todo-react-firebase-app.firebaseio.com",
    projectId: "todo-react-firebase-app",
    storageBucket: "todo-react-firebase-app.appspot.com",
    messagingSenderId: "479771859000",
    appId: "1:479771859000:web:5b869608236e76959aeecd",
    measurementId: "G-ZBVHC5EN24"
});

const db = firebaseApp.firestore();
// const auth = firebase.auth();

export default db;