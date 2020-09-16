import React from 'react';
import RepoEntry from './RepoEntry.jsx';
var RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <ul>
      {props.repos.map((repo, index) =>
      <li>REPO: {repo.name}
        <ul>
          <li>link: {repo.url}</li>
          <li>by {repo.username}</li>
        </ul>
      </li>
    )}
    </ul>


  </div>

)

export default RepoList;