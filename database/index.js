const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  forks: Number,
  url: String,
  repoId: Number,
  name: String,
  username: String,
  stargazers: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (username, data) => {

  for(var i = 0; i < data.length; i ++) {
  //query to check if the id is already in database
    var currentRepo = data[i];
    //TODO: figure out opt out of create for result array that contains something
    // Repo.find({repoId: currentRepo.id})
    //   .then((result) => {
    //     if (result.length !== 0) {
    //       console.log('repo does exists for: ', result.name);
    //     }
    //   })
      Repo.create({
        forks: currentRepo.forks_count,
        url: currentRepo.html_url,
        repoId: currentRepo.id,
        username: username,
        name: currentRepo.name,
        stargazers: currentRepo.stargazers_count
      })
  }
}

  // data.forEach((repo) =>
  // var testRepo = new Repo({repoId: data});
  // console.log(testRepo.repoId);
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  // data.map((repo) => {

  // }


module.exports.save = save;