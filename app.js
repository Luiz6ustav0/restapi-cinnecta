const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { login, pw, db } = require('./secrets');


const app = express();

const dbURI = `mongodb+srv://${login}:${pw}@cluster0.l6tbh.mongodb.net/${db}?retryWrites=true&w=majority`;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log("App Running\nListenning to port 3000");
        app.listen(3000);
    })
    .catch((err) => console.log(err));

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));