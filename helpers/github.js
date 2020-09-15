const axios = require('axios');
const config = require('../config.js');
const db = require('../database/index.js');

let getReposByUsername = (username, callback) => {
  let options = {
    method: 'get',
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  console.log(options.url);
  axios(options)
    .then((results) => {
      if(!results){
        throw (results);
      }
      console.log('id --->', results.data[0].id, 'html_url --->', results.data[0].html_url, 'forks --->', results.data[0].forks_count);
      return results.data;
      //planning to make a callback which saves this info to the database
      //
    })
    .catch((err) => {
      console.log(err);
      console.log('unsuccessful request 2.0');
    })
  //.then(db.save(results))
}

module.exports.getReposByUsername = getReposByUsername;