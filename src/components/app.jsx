import React, { Component } from 'react';
import ReactDom from 'react-dom';
import ListAppartement from './list-appartement';
import Map from './map';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {}
    }
  }

  setLatLng = (flat) => {
    if (this.state.selected.lat !== flat.lat) {
      this.setState({
        selected: { lng: flat.lng, lat: flat.lat }
      });
    } else {
      this.setState({
        selected: {}
      });
    }
  }


  render() {
    console.log("selected flat:" + this.state.selected.lat);
    return (
      <div className="container">
        <ListAppartement setLatLng={this.setLatLng}/>
        <Map selected={this.state.selected} />
      </div>
    );
  }
}

export default App;
