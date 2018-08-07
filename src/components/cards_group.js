import React from 'react';
import Card from './card';
import data from '../data/publications.json';
import '../styles/cards_group.css';

const CardsGroup = (props) => {
  return (
    <div className="cards">
      <div className="cards__toggle">GRID VIEW</div>
      <div className="cards__group">
        <Card data={data}/>
      </div>
    </div>
  )
}

export default CardsGroup;


