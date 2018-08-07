import React from 'react';
import '../styles/card_item.css';

const CardItem = (props) => {
  //console.log(props);
  //debugger
  return (
    <div className="card-item">
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

export default CardItem;


  // Object.keys(props.item).map(el => {
  //   return <div>{props.item[el]}</div>
  // }