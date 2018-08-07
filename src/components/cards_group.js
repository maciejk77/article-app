import React, { Component } from 'react';
import Card from './card';
import data from '../data/publications.json';
import '../styles/cards_group.css';

class CardsGroup extends Component {
  constructor(props) {
    super(props)

    this.render_cards = this.render_cards.bind(this);
  }

  render_cards() {
    return data.map(prop => {
      return (
        <div key={prop.id} className="card">
          <Card item={prop} />
        </div>
      )
    })
  }

  render() {   
    return (
      <div className="cards">
        <div className="cards__toggle">GRID VIEW</div>
        <div className="cards__group">{this.render_cards()}</div>
      </div>
    )
  }
}
  
export default CardsGroup;

