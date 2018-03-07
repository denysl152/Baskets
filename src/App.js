import React, { Component } from 'react';
import Motif from './img/canyou.jpg';
import Nike from './img/nike.jpeg';
import Tshirt from './img/tshirt.jpeg';
import Shoes from './img/Nikechause.jpeg';
import NavBar from './NavBar'
import data from './data.js'  ;
import Card from './Card';
import Cart from './Cart';

class App extends Component {
state={
  cardData:[],
}


sendtoArrray = p =>{
  let {cardData} = this.state;
  let index = cardData.indexOf(p);

  if(index ===-1){
  this.setState({
    cardData:[...this.state.cardData, p]
    //... il servent a push dans le tableau
  })

} else {
  console.log()
  cardData[index].nb++;
  //crée une clee = total et lui donne la valeur du prix multiplié par le meme produit 
  cardData[index].total= cardData[index].price*cardData[index].nb;
  this.setState({
    cardData:[...cardData]
  })
}
}
delete = (p , i) =>{
  let {cardData} = this.state;
  //si la clé nombre est supérieure à 1
  if (cardData[i].nb <1){
    //tu decrémentes la valeur de la clé nombre
    cardData[i].nb--;
    //tu recalcul le total
    cardData[i].total=cardData[i].nb * cardData[i].price;
  }else{
    //tu mets à jours la state
    cardData.splice(i,1);
  }

  this.setState({
cardData : [...cardData]
  })
}


  render() {
    console.log(this.state.cardData)
      return (
      <div>
    <NavBar />
    <div className="row">
      {data.map ((el,i)=>{
        return(
    
  <Card key={i}
  name={el.name} 
  price={el.price}
  description={el.description}
  img={el.img}
  alt={el.name}
  onClick={()=> this.sendtoArrray(el)} />
      )
    })}
  </div>      
  
    <ul className="collection">
{this.state.cardData.map((el, i)=>{
  return(
    <Cart
    img={el.img}
    nb={el.nb}
    name={el.name}
    total={!el.total ? el.price : el.total}
    initDelete={()=> this.delete(el , i)} />
  )
})}

        </ul>




     </div>
    )
  }
}
export default App;
