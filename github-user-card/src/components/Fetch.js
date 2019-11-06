import React from 'react';
// import axios from 'axios';
import UserCard from './UserCard'
import FollowersCard from './FollowersCard';

class Fetch extends React.Component {
  constructor() {
    super();
    this.state= {
      user: {},
      followers: []
    };
  };

componentDidMount() {  //make new comp & use fetch
    fetch('https://api.github.com/users/dtibbs5145')
    .then(res => res.json())
    .then(res => {
      console.log(res);
        this.setState({
          user: res
        })
      })
      .catch(error => {
        console.log(error);
      })
      
      fetch('https://api.github.com/users/dtibbs5145/followers')
      .then(res => res.json())
      .then(res => {
        console.log(res);
          this.setState({
            followers: res
          })
        })
        .catch(error => {
          console.log(error);
        })
      }

      render() {
        return (
          <div className='App-header'>
            <h1>User Info</h1>
            {/* <User user={this.state.user}/> */}
            <UserCard user={this.state.user} key={this.state.user.id} />
            {this.state.followers.map(followers => (
              <FollowersCard followers={followers} key={this.state.user.followers.id} />
            ))}
          </div>
        )
      }
  };

  export default Fetch;