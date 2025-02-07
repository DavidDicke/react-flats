import React, { Component } from 'react';
import ReactDom from 'react-dom';
import flats from './flats';
import CardAppartement from './card-appartement';


class ListAppartement extends Component {

  render() {
    return (
      <div className="list-appartements">
        { flats.map((flat) => {
          return <CardAppartement key={flat.lng} flat={flat} />;
        })}
      </div>
    );
  }
}

export default ListAppartement;
