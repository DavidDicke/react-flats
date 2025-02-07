import React, { Component } from 'react';
import ReactDom from 'react-dom';
import ListAppartement from './list-appartement';
import Map from './map';

class App extends Component {
  render() {
    return (
      <div className="container">
        <ListAppartement />
        <Map />
      </div>
    );
  }
}

export default App;
