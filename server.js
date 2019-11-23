// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sampleReservations = [
    {
        name: "John",
        phoneNumber: "5555555",
        email: "email@email.com",
        id: 42,

    }];

const sampleWaitList = [
    {
    name: "Jim",
    phoneNumber: "4444444",
    email: "jim@email.com",
    id: 53,
}];

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "Home.html"));
});

app.get("/make", function (req, res) {
    res.sendFile(path.join(__dirname, "Make.html"));
});

app.get("/view", function (req, res) {
    res.sendFile(path.join(__dirname, "View.html"));
});

app.get("/api/reservations", function (req, res) {
    return res.json(sampleReservations);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(sampleWaitList);
});


app.get("/api/reservations/:reservation", function (req, res) {
    var chosen = req.params.sampleReservations;

    console.log(chosen);

    for (var i = 0; i < sampleReservations.length; i++) {
        if (chosen === sampleReservations[i].routeName) {
            return res.json(sampleReservations[i]);
        }
    }

    return res.json(false);
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
