import React from 'react';
import '../styles/card.css';

const Card = (props) => {
  const { shortTitle, doi, publicationType, publicationDate, 
          abstract, nViews, nDownloads, journalId } = props.item;
  const link = `http://doi.org/${doi}`;
          
  return (
    <div>
      <div className="dot" style={{backgroundColor: props.color_palette[journalId.toLowerCase()]}}></div>
      <div>{shortTitle}</div>
      <div>{link}</div>
      <div>{publicationType}</div>
      <div>{publicationDate}</div>
      {props.is_list_view &&   
        <div className="card-abstract" dangerouslySetInnerHTML={{ __html: abstract }}></div>
      }
      <div>{nViews}</div>
      <div>{nDownloads}</div>
    </div>
    )  
}

export default Card;