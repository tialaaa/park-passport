import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getData } from '../../apiCalls';
import { cleanData } from '../../utilities';
import { ParkContainer } from '../Park-Container/Park-Container';

class App extends Component {
  constructor() {
    super();
    this.state = {
      parks: [],
      userVisited: [],
      error: '',
    }
  };

  componentDidMount = () => {
    getData()
      .then(res => {
        this.setState({ parks: cleanData(res) })
        console.log(this.state)
      })
      .catch(err => this.setState({ error: err.message }))
  };

  toggleVisited = (event) => {
    if (this.state.userVisited.includes(event.target.fullName)) {
      this.state.userVisited.splice(event.target.fullName)
    } else {
      this.state.userVisited.push(event.target.fullName)
    };
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">Park Passport</header>
        <ParkContainer parksArray={this.state.parks}></ParkContainer>
      </div>
    );
  };
}

export default App;
