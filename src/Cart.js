import React, { Component } from 'react';

class Cart extends Component {
    render() {
        const {img, nb, name, total , initDelete} =this.props;
        return (

    <li className="collection-item avatar">
      <img src={img} alt="" className="circle" />
      <span className="title">{name}</span>
      <p><b>Prix: </b>{total} <br />
      <b>Nombre de produits: </b>{nb}
  </p>
      <a href="#!" className="secondary-content"><i className="material-icons" onClick={initDelete}>delete</i></a>
    </li>

        );
    }
}


export default Cart;