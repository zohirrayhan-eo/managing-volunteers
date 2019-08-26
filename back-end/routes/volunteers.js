const express = require("express");
const bodyParser = require("body-parser");

const volunteerRouter = express.Router();

volunteerRouter.use(bodyParser());

// sending all the volunterrs !!
volunteerRouter.route('/')
.get((req,res,next)=>{
    res.send("this route for all the volunteers to show !!")
})



module.exports = volunteerRouter;