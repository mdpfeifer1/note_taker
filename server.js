// On the back end, the application should include a `db.json` file that will be used to store 
// and retrieve notes using the `fs` module.

const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

const notes = require('./db/db.json')

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));


// * `GET /notes` should return the `notes.html` file.

// * `GET *` should return the `index.html` file.

// The following API routes should be created:

// * `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

// * `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` 
// file, and then return the new note to the client. 
// You'll need to find a way to give each note a unique id when it's saved 
// (look into npm packages that could do this for you).




app.listen(PORT, ()  => {
    console.log(`Server is now on port ${PORT}!`);
});
