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
// Creating variable to reference the database. 
//THIS LINE IS GENERATING AN ERROR FOR ME AND I AM UNABLE TO SOLVE THIS ISSUE
var database = firebase.database();

var name = "";
var destination = "";
var first = "";
var frequency = "";



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

    // convert the first instance of the train departing using moments
    var trainFirstTimeConversion = moment(trainFirstTime, "HH:mm");
    // current time 
    console.log("CURRENT TIME: " + moment().format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(trainFirstTimeConversion), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % trainFrequency;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

    //load data from array to database
    database.ref().push({
        name: trainName,
        destination: trainDestination,
        first: trainFirstTimeConversion, // use the converted value to be stored
        frequency: trainFrequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP,
        nextarrival: nextTrain
    });


    // clear text boxes once input added
    $("#train-name").val("");
    $("#destination").val("");
    $("#first-train-time").val("");
    $("#frequency").val("");

});

database.ref().on("child_added", function (childSnapshot) {

    // Log everything that's coming out of snapshot
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().destination);
    console.log(childSnapshot.val().first);
    console.log(childSnapshot.val().frequency);
    console.log(childSnapshot.val().dateAdded);


});

