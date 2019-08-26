const express = require("express");
const morgan = require('morgan')

// static information !!
const PORT = 3000;
const localhost = "localhost";

// all the routes !!
const volunteers = require("./routes/volunteers");

const app = express();
app.use(morgan('dev'));

app.use('/volunteers', volunteers);

app.listen(PORT, ()=>{
    console.log(`the server is running on the port ${PORT}`);
})