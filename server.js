var express = require("express")

var port = process.env.PORT || 3002 
// var db = require("./models") 
// app.use(express.static("./client/build"))
// var path = require("path")
// app.get("/formcontact" , function (req , res){
//     res.sendFile(path.join(__dirname, "./formcontact.html"))
// })
// db.sequelize.sync().then(function(){
//     app.listen(port)
// }) 
// Dependencies

var mongojs = require("mongojs");

// Initialize Express
var app = express();

// Set up a static folder (public) for our web app
app.use(express.static("client/build"));

// Database configuration
// Save the URL of our database as well as the name of our collection
var databaseUrl = "contactdb";
var collections = ["events"];

// Use mongojs to hook the database to the db variable
var db = mongojs(databaseUrl, collections);

// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// Routes
// 1. At the root path, send a simple hello world message to the browser
// app.get("/", function(req, res) {
//   res.send("Hello world");
// });

// 2. At the "/all" path, display every entry in the animals collection
app.get("/all", function(req, res) {
  // Query: In our database, go to the events collection, then "find" everything
  db.events.find({}, function(error, found) {
    // Log any errors if the server encounters one
    if (error) {
      console.log(error);
    }
    // Otherwise, send the result of this query to the browser
    else {
      res.json(found);
    }
  });
});

// 3. At the "/name" path, display every entry in the animals collection, sorted by name
app.get("/name_of_company", function(req, res) {
  // Query: In our database, go to the animals collection, then "find" everything,
  // but this time, sort it by name (1 means ascending order)
  db.events.find().sort({ name_of_company: 1 }, function(error, found) {
    // Log any errors if the server encounters one
    if (error) {
      console.log(error);
    }
    // Otherwise, send the result of this query to the browser
    else {
      res.json(found);
    }
  });
});

// 4. At the "/weight" path, display every entry in the animals collection, sorted by weight

// Set the app to listen on port 3000
app.listen(port, function() {
  console.log("App running on port 3002!");
});
