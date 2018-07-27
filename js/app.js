
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCgMLvblveRa3vZsUTCkVxqYU8rw2IFzF4",
      authDomain: "realorbital-386b5.firebaseapp.com",
      databaseURL: "https://realorbital-386b5.firebaseio.com",
      projectId: "realorbital-386b5",
      storageBucket: "realorbital-386b5.appspot.com",
      messagingSenderId: "207931046306"
    };
    firebase.initializeApp(config);
    var firestore= firebase.firestore();

    //manually initialise firebase and firestore
const firebase =require("firebase");
// Required for side-effects
require("firebase/firestore");
module.exports = require('./src/standalone/');
