import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAjSqNKn1elJcgB289L2JVbVeDnKzRRlQ4",
    authDomain: "wyli-813e6.firebaseapp.com",
    projectId: "wyli-813e6",
    storageBucket: "wyli-813e6.appspot.com",
    messagingSenderId: "709993465204",
    appId: "1:709993465204:web:d998504eea0ff637681821"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();