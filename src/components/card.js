import React from 'react';
import '../styles/card.css';

const Card = (props) => {
  return (
    <div className="card__items">
      <div>{props.item.shortTitle}</div>
      <div>{props.item.doi}</div>
      <div>{props.item.publicationType}</div>
      <div>{props.item.publicationDate}</div>
      <div>views: {props.item.nViews}</div>
      <div>downloads: {props.item.nDownloads}</div>
      <div>{props.item.journalId}</div>
    </div>
    )  
}

export default Card;