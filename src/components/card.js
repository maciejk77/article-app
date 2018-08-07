import React from 'react';
import CardItem from './card_item';
import '../styles/card.css';

const Card = (props) => {
  return props.data.map(prop => {
    return (
      <div  className="card">
        <CardItem 
          key={prop.id} 
          item={prop} 
        />
      </div>
    )
  })
}

export default Card;