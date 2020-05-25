const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('db.json');

const PORT = process.env.PORT || 3000;

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

var notes = fs.readFile('./db/db.json', "utf8", function (error, data) {
    if (err) {
        throw err
    }
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
});

app.get("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
    res.json(notes);
});

app.post("/api/notes", function (req, res) {
    newNote = req.body;
    notes.push(newNote);
});

// app.delete("/api/notes/:id", function (req, res) {
//     //remove notes from the json
// });

app.listen(PORT, function () {
    console.log(`App is listening on PORT ${PORT}`);
});