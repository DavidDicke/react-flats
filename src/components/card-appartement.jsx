import React, { Component } from 'react';
import ReactDom from 'react-dom';

class CardAppartement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
  }

  selectFlat = (event) => {
    this.setState({
      selected: !this.state.selected
    });
    this.props.setLatLng(this.props.flat);
    event.currentTarget.classList.toggle("card-selected");
  }

  render() {
    return (
      <div className="card-appartement" onClick={this.selectFlat} style={{ background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${this.props.flat.imageUrl}) center / cover` }}>
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
      </div>
    );
  }
}

export default CardAppartement;
