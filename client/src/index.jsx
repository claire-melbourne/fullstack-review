import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }
  getRepos () {
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:1128/repos',
      success: (data) => {
        this.setState({
          repos: data
        })
      }
    })
  }
  componentDidMount () {
    console.log('functioning componentdidmount')
    this.getRepos();
    // $.ajax({
    //   type: 'GET',
    //   url: 'http://127.0.0.1:1128/repos',
    //   success: (data) => {
    //     this.setState({
    //       repos: data
    //     })
    //   }
    // })
  }

  search (username) {
  console.log(`${username} was searched`);
  $.ajax({
    type: 'POST',
    url: 'http://127.0.0.1:1128/repos',
    data: {"username": username},
    success: $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:1128/repos',
      success: (data) => {
        this.setState({
          repos: data
        })
      }
    })
    //updating on second search without refresh but not on first
  })
}
  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));