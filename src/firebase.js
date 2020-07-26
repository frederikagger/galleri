import firebase from "firebase";

let firebaseConfig = {
    apiKey: "AIzaSyDw4WSi-LuwDyiGCc_qJvL9wCzOQgW78FI",
    authDomain: "gerdagger-72890.firebaseapp.com",
    databaseURL: "https://gerdagger-72890.firebaseio.com",
    projectId: "gerdagger-72890",
    storageBucket: "gerdagger-72890.appspot.com",
    messagingSenderId: "854835282956",
    appId: "1:854835282956:web:a60d6efd0f1942d77b5a29",
    measurementId: "G-KFGKW2MRRT"
};
// Initialize Firebase
let project = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default project