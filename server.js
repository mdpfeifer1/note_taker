const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

const notes = require('./db/db.json')

const PORT = process.env.PORT || 3001;

app.use(express.static('public'));


