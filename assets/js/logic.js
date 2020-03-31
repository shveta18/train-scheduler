var firebaseConfig = {
    apiKey: "AIzaSyBIUM8x4H4wGoNa-FRm91b_jEKhEJoh2zY",
    authDomain: "homework-trains.firebaseapp.com",
    databaseURL: "https://homework-trains.firebaseio.com",
    projectId: "homework-trains",
    storageBucket: "homework-trains.appspot.com",
    messagingSenderId: "28213065803",
    appId: "1:28213065803:web:072e7c8b60ddb36fd135ce",
    measurementId: "G-BWLCJ0TDQ0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Creating variable to reference the database
var database = firebaseConfig.database;

// When the admin submits a new record for a train the input entered must be pulled and added to an array

$("#submit-button").on("click", function (event) {
    event.preventDefault();

    //Get the values from form
    var trainName = $("#train-name").val().trim();
    var trainDestination = $("#destination").val().trim();
    var trainFirstTime = $("#first-train-time").val().trim();
    var trainFrequency = $("#frequency").val().trim();

    // console log to check if values are stored
    console.log("Train name: " + trainName);
    console.log("Train name: " + trainDestination);
    console.log("Train name: " + trainFirstTime);
    console.log("Train name: " + trainFrequency);

    // once values are stored, push to the database inside an array

});

