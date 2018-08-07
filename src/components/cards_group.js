import React, { Component } from 'react';
import Card from './card';
import data from '../data/publications.json';
import '../styles/cards_group.css';
import cn from 'classnames';

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
          className={cn('card', 
            {'card-list-view': this.state.is_list_view}, 
            {'card-grid-view': !this.state.is_list_view})} 
            // tenary did not work {this.state.is_list_view ? 'card-list-view' : 'card-grid-view'}
            // ideally to have default width: 30% on card class and change that to 100% on card class with this.state.is_list_view
        >
          <Card 
            item={prop} 
            is_list_view={this.state.is_list_view}
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

// className={cn('card', {'card-list-view': prop.is_list_view })}