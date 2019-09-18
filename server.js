const express = require('express');

const bodyParse = require('body-parser');

const morgan = require('morgan');

const app = express();

const cors = require('cors');

const BASEURL = "/api/v1";

const db = require('./db/db');

const Bug = require('./models/Bug');

const routes = require('./routes/main');

app.use(morgan('dev'));

app.use(cors());

app.use(`${BASEURL}` , routes);

const PORT = 8000;

app.listen(PORT , ()=>{
    // db.sync().then(() => {
         console.log('Database Connected and App is running on PORT- ' ,PORT);
    // })
    // .catch(err => console.log('Error: ', err))
});