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
  axios(options)
    .then((results) => {
      if(!results){
        throw (results);
      }
      console.log(results.data[0].id)
      callback(results.data[0]);
    })
}

module.exports.getReposByUsername = getReposByUsername;