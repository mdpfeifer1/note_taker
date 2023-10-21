// On the back end, the application should include a `db.json` file that will be used to store 
// and retrieve notes using the `fs` module.
const express = require('express');
const routesAPI = require('./routes/routerAPI.js');
const routesHTML = require('./routes/routerhtml.js');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', routesAPI);
app.use('/', routesHTML);

app.listen(PORT, ()  => {
    console.log(`Server is now on port at http://localhost:${PORT}`);
});
