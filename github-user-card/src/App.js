import React from 'react';
import './App.css';
// import axios from 'axios';
// import UserCard from './components/UserCard';
// import User from './components/User';
import Fetch from './components/Fetch';

function App() {
  return(
    <div className = 'App' >
      <Fetch />
    </div>
  )
}

export default App;
  // componentDidMount() {  //make new comp & use fetch
  //   axios
  //     .get('https://api.github.com/users/dtibbs5145')
  //     .then(res => {
  //       console.log(res);
  //       this.setState({
  //         user: res.data
  //       })
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })

  //   axios
  //     .get('https://api.github.com/users/dtibbs5145/followers')
  //     .then(res => {
  //       console.log(res);
  //         this.setState({
  //           followers: res.data.followers
  //         })
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       })
  //     }

  //     render() {
  //       return (
  //         <div className='App-header'>
  //           <h1>User Info</h1>
  //           <User user={this.state.user}/>
  //           <UserCard user={this.state.user} followers={this.state.user.followers}/>
  //         </div>
  //       )
  //     }
  // }
