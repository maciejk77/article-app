import React from 'react';
import '../styles/card.css';

const Card = (props) => {
  const { shortTitle, doi, publicationType, publicationDate, 
          abstract, nViews, nDownloads, journalId } = props.item;
          
  return (
    <div>
      <div>title: {shortTitle}</div>
      <div>doi: {doi}</div>
      <div>type: {publicationType}</div>
      <div>date: {publicationDate}</div>
      {props.is_list_view &&   
        <div className="card-abstract" dangerouslySetInnerHTML={{ __html: abstract }}></div>
      }
      <div>v: {nViews}</div>
      <div>d: {nDownloads}</div>
      <div>{journalId}</div>
    </div>
    )  
}

export default Card;