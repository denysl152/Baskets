import React, { Component } from 'react';
import data from './data.js';

class Card extends Component {
  render() {
    const { img, name, total, nb, initDelete, alt, onClick, price, description } = this.props;
    return (
<div className="Container">
<div className="col s4">
          <div className="card">
            <div className="card-image">
              <img src={img} alt={alt}/>
              <span className="card-title">{name}</span>
              <a className="btn-floating halfway-fab waves-effect waves-light red" onClick={onClick}>
                <i className="material-icons">add</i></a>
            </div>
            <div className="card-content">
              <p>{price}</p>
              <p>{description}</p>
            </div>
          </div>
        </div>
</div>
 );
  }
}

export default Card;
