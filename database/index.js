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

// var test = Repo.find().sort({ "forks" : -1 }).then((result) => {
//   console.log('first item in top 25', result[0])
// })
// console.log( test, '--------------------');
let getTopRepos = (callback) => {
  Repo.find().sort({ "forks" : -1 }).limit(25).then((result) => {
    var reposArray = []
    for(var i = 0; i < result.length; i ++) {
      // var currentRepo = [result[i]._doc.name, result[i]._doc.url, result[i]._doc.username];
      reposArray.push(result[i]._doc);
    }
    //console.log('fulll arraay!!-------', reposArray);
    callback(reposArray)
  })

}



module.exports.save = save;
module.exports.getTopRepos = getTopRepos;