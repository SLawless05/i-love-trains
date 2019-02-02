// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
var config = {
    apiKey: "AIzaSyCw6EXeNZ684d-UkkK6Gg-IczWyTu5fkbI",
    authDomain: "nosleeptillfirebase.firebaseapp.com",
    databaseURL: "https://nosleeptillfirebase.firebaseio.com",
    projectId: "nosleeptillfirebase",
    storageBucket: "nosleeptillfirebase.appspot.com",
    messagingSenderId: "173729233415"
};
firebase.initializeApp(config);

// Assign the reference to the database to a variable named 'database'
// var database = ...
var database = firebase.database();


// Initial Values

// --------------------------------------------------------------


database.ref().on("child_added", function (childSnapshot) {

    //moment().format("MMM Do YY");
    var row = $("<tr>").append(
        $("<td>").text(childSnapshot.val().trainName),
        $("<td>").text(childSnapshot.val().destination),
        $("<td>").text(childSnapshot.val().frequency),
        $("<td>").text(childSnapshot.val().nextArrival),
        $("<td>").text(childSnapshot.val().minutesAway)
    );
    $("#table-div").append(row);

});

// -----------------------------------sq---------------------------

// Whenever a user clicks the submit button
$("#submit").on("click", function (event) {
    // Prevent form from submitting
    event.preventDefault();

    // Get the input values
    var trainName = $("#train-name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var firstTrain = moment($("#first-time-input").val().trim(), "hh:mm a").format("X");
    var frequency = $("#frequency-input").val().trim();

    //calculate
    var currentTime = moment().format('hh:mm a');

    //while (nextArrival)

    nextArrival = currentTime.add(frequency, 'minutes').format('hh:mm a');

    //moment('2016-03-12 13:00:00').add(24, 'hours').format('LLL')

    var minutesAway = 7;
    var nextArrival = currentTime;

    //
    console.log(trainName);
    console.log(destination);
    console.log(firstTrain);
    console.log(frequency);
    console.log(nextArrival);
    console.log(minutesAway);

    database.ref().push({
        trainName: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
        nextArrival: nextArrival,
        minutesAway: minutesAway
    });
});
