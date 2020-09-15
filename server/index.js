const express = require('express');
const bodyparser = require('body-parser');
const db = require('../database/index.js');
const gitHub = require('../helpers/github.js');
let app = express();


app.use(express.static(__dirname + '/../client/dist'));
//app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.post('/repos', function (req, res) {
  console.log('received request')
  var username = req.body.username;
  if(!req.body) {
    throw req.body
  }
  //getReposByUsername(username)
    //.then
    //if error throw error
    //otherwise use modeule.exports save to insert results into database  -- db.save
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log(req.body, "<---request body");
  gitHub.getReposByUsername(username);
  // gitHub.getReposByUsername(username, (err, results) => {
  //   if (err) {
  //     res.sendStatus(404);
  //   }
  //   console.log(results);
  //   // res.sendStatus(201);
  // })
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

