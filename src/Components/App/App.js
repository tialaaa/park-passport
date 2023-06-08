import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getData } from '../../apiCalls';
import { cleanData } from '../../utilities';
import { ParkContainer } from '../Park-Container/Park-Container';
import { Details } from '../Details/Details';
import { Header } from '../Header/Header';
import ScrollToTop from '../Scroll-To-Top/ScrollToTop';

class App extends Component {
  constructor() {
    super();
    this.state = {
      parks: [],
      userVisited: [],
      loading: true,
      error: '',
    }
  };

  componentDidMount = () => {
    getData()
      .then(res => {
        this.setState({ parks: cleanData(res), loading: false })
        console.log(this.state)
      })
      .catch(err => this.setState({ error: err.message }))
  };

  toggleVisited = (selectedParkCode) => {
    if (!this.state.userVisited.includes(selectedParkCode)) {
      this.setState({ userVisited: [...this.state.userVisited, selectedParkCode]});
    } else {
      const updatedList = this.state.userVisited.filter(parkCode => parkCode !== selectedParkCode);

      this.setState({ userVisited: updatedList})
    };
  };

  render() {
    return (
      <main>
        <ScrollToTop />
        <Header/>
        <Switch>
          <Route exact path='/' render={ () => 
            <ParkContainer parksArray={this.state.parks} loadingState={this.state.loading} toggleVisited={this.toggleVisited}/> }
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
