const routes = require('express').Router();
const uuid = require('uuid');
const { readAndAppend, readFromFile } = require('../helper/uuid');

// GET Route for retrieving all the feedback
routes.get('/notes', (req, res) =>
  readFromFile('./db/feedback.json').then((data) => res.json(JSON.parse(data)))
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
        id: uuid(),
    };

    readAndAppend(notes, './db/db.json');

    const response = {
      status: 'success',
      body: newFeedback,
    };

    res.json(response);
  } else {
    res.json('Error in posting feedback');
  }
});

module.exports = routes;