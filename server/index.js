const express = require('express');
const bodyparser = require('body-parser');

let app = express();


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.post('/repos', function (req, res) {
  console.log('received request')
  debugger;
  if(!req.body) {
    throw req.body
  }
  console.log(req.body)
  res.sendStatus(201);

  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

