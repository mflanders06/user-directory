import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './Components/data'
import UserCard from './Components/UserCard';
import Nav from './Components/Nav';

class App extends Component{
  constructor(){
    super();
    
    this.state ={
      currentIndex: 0,
      users: data

    }
    this.navHandler = this.navHandler.bind(this);
  }

  navHandler(direction){
    console.log(direction);
    if (direction === -1 && this.state.currentIndex === 0 ){
      return
    }
    else if (direction === 1 && this.state.currentIndex === this.state.users.length -1){
      return
    }
    else{
    this.setState({ currentIndex: this.state.currentIndex + direction });
    }
  }

  render(){
    return(
      <div>
        <div className="homeBar">Home</div>
        <div className="App">

          <div className="userCard">

            <UserCard users={this.state.users} currentIndex={this.state.currentIndex}/>
          </div>
          <nav >
            <Nav currentIndex={this.state.currentIndex} navHandler={this.navHandler}/>
          </nav>
          <div className="extraControls"></div>


        </div>
      </div>
    )
  }

}

export default App;

// Just referencing the code I used to display the data.js object {JSON.stringify( this.state.users)}