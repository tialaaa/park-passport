import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getData } from '../../apiCalls';
import { cleanData } from '../../utilities';

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
  }

  render() {
    return (
      <div className="App">
        {/* {console.log(process.env.REACT_APP_API_KEY)} */}
        <header className="App-header">Park Passport</header>
      </div>
    );
  };
}

export default App;
