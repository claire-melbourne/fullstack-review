const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  forks: Number,
  url: String,
  repoId: Number,
  username: String,
  stargazers: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  console.log(data[0].id)
  // data.map((repo) => {

  // }
}

module.exports.save = save;