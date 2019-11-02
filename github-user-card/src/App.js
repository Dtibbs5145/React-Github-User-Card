import React from 'react';
import './App.css';
import axios from 'axios';
// import UserCard from './components/UserCard';
// import User from './components/User';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: []
    };
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/dtibbs5145')
      .then(res => {
        console.log(res);
        this.setState({
          user: res.data
        })
      })
      .catch(error => {
        console.log(error);
      })

    axios
      .get('https://api.github.com/users/dtibbs5145/followers')
      .then(res => {
        console.log(res);
          this.setState({
            followers: res.data
          })
        })
        .catch(error => {
          console.log(error);
        })
      }

      render() {
        return (
          <div>
            <h1>Hello User</h1>
            {/* <User /> */}
            {/* <UserCard /> */}
          </div>
        )
      }
  }

export default App;
