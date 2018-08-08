import React, { Component } from 'react';
import Card from './card';
import data from '../data/publications.json';
import '../styles/cards_group.css';
import cn from 'classnames';

const color_palette = {
  red: '#f08080', // lightcoral to replace red
  blue: '#ADD8E6', // lightblue
  green: '#90EE90', // lightgreen
  yellow: '#FFFF82', // lighter yellow
  orange: '#F9D188' // lighter orange
}

class CardsGroup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      is_list_view: false
    }
    this.render_cards = this.render_cards.bind(this);
    this.toggle_view = this.toggle_view.bind(this);
  }

  render_cards() {
    return data.map(prop => {
      return (
        <div key={prop.id}
          style={{borderLeftColor: color_palette[prop.journalId.toLowerCase()], borderLeftWidth: ".25rem"}} 
          className={cn('card', 
            {'card-list-view': this.state.is_list_view}, 
            {'card-grid-view': !this.state.is_list_view})} 
            // tenary did not work {this.state.is_list_view ? 'card-list-view' : 'card-grid-view'}
            // ideally to have default width: 30% on card class and change that to 100% on card class with this.state.is_list_view
        >
          <Card 
            item={prop} 
            is_list_view={this.state.is_list_view}
            color_palette={color_palette}
          />
        </div>
      )
    })
  }

  toggle_view() {
    this.setState(prevState => ({
      is_list_view: !prevState.is_list_view
    }))
  }

  render() {
    return (
      <div className="cards">
        <button className="cards__toggle" onClick={this.toggle_view}>
          {this.state.is_list_view ? 'LIST VIEW' : 'GRID VIEW'}
        </button>
        <div className="cards__group">{this.render_cards()}</div>
      </div>
    )
  }
}
  
export default CardsGroup;
