import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getData } from '../../apiCalls';
import { cleanData } from '../../utilities';
import { ParkContainer } from '../Park-Container/Park-Container';
import { Details } from '../Details/Details';

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
      <main>
        {/* <Header /> */}
        <Switch>
          <Route exact path='/' render={ () => 
            <ParkContainer parksArray={this.state.parks}/> }
          />
          <Route exact path='/park-details/:parkCode' render={ ({match}) => {
            const selectedPark = this.state.parks.find(park => park.parkCode === match.params.parkCode);
            return <Details park={selectedPark}/> }}
          />
        </Switch>
      </main>
    );
  };
}

export default App;
