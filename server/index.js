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
  gitHub.getReposByUsername(username, (username, results) => {
    // if (err) {
    //   res.sendStatus(404);
    // }
    db.save(username, results)
    res.sendStatus(201);
  })
});

app.get('/repos', function (req, res) {
//query database
  db.getTopRepos();
  res.end('25 repos');
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

