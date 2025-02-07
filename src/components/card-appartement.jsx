import React, { Component } from 'react';
import ReactDom from 'react-dom';

class CardAppartement extends Component {
  render() {
    return (
      <div className="card-appartement" style={{ background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${this.props.flat.imageUrl}) center / cover` }}>
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
      </div>
    );
  }
}

export default CardAppartement;
