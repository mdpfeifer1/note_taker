const routes = require('express').Router();
const uuidv4 = require('uuid');
const { readAndAppend, readFromFile } = require('../helper/uuid');
const db = require('../db/db.json');

// GET Route for retrieving all the feedback
routes.get('/notes', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// POST Route for submitting feedback
routes.post('/notes', (req, res) => {
  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const notes = {
        title, 
        text,
        id: uuidv4,
    };

    readAndAppend(notes, './db/db.json');

    const response = {
      status: 'success',
      body: notes,
    };

    res.json(response);
  } else {
    res.json('Error in posting feedback');
  }
});

module.exports = routes;