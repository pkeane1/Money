require('dotenv').config()
var express = require("express");
var path = require("path")
const axios = require('axios')
const fs = require('fs')


// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();


// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))
// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/bets.html"));
  });

app.get('/hi',function(req,res){
    res.send('did this work?')
})

require("./routes/sportsLinesApi")(app);



// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

module.exports = app;
