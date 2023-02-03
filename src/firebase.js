import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB4CrYIA4IRF4sQnLHb_c1CcGTQz1bYdKY",
    authDomain: "urja-2023.firebaseapp.com",
    databaseURL: "https://urja-2023-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "urja-2023",
    storageBucket: "urja-2023.appspot.com",
    messagingSenderId: "64860474258",
    appId: "1:64860474258:web:dd005ef43a1e690a838f4b",
    measurementId: "G-PZ4NNRHQ1Q"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

export default database;