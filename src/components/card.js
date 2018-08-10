import React from 'react';
import '../styles/card.css';
import cn from 'classnames';

const Card = (props) => {
  const { shortTitle, doi, publicationType, publicationDate, 
          abstract, nViews, nDownloads, journalId } = props.item;
  const link = `http://doi.org/${doi.toLowerCase()}`;
          
  return (  
    <div>
      <div className="card__header">
        <div className="card__dot" style={{backgroundColor: props.color_palette[journalId.toLowerCase()]}}></div>
        {props.is_list_view &&
          <div className="td-wrapper">  
            <div className={cn("card__item", "card__type")}>{publicationType}</div>
            <div className={cn("card__item", "card__date")}>-&nbsp;&nbsp;{publicationDate.split(' ')[0]}</div>
          </div>
        }
      </div>   
      <div className={cn("card__item", "card__title")}>{shortTitle}</div>
      <div className={cn("card__item")}><a href={link} target="_blank" className="card__link">{link}</a></div>
      {!props.is_list_view &&
        <div className="td-wrapper">  
          <div className={cn("card__item", "card__type")}>{publicationType}</div>
          <div className={cn("card__item", "card__date")}>-&nbsp;&nbsp;{publicationDate.split(' ')[0]}</div>
        </div>
      }
      {props.is_list_view &&   
        <div 
          className="card__item" 
          dangerouslySetInnerHTML={{ __html: abstract }}
          style={{overflow: "hidden", display: "-webkit-box", WebkitLineClamp: "3", WebkitBoxOrient: "vertical", padding: "0 .5rem"}}
        >
        </div>
      }
      <div className="vd-wrapper">  
        <div className="vd-group">
          <div className={cn("card__item", "card__views")}>
            {nViews}&nbsp;
            <i class="fa fa-eye"></i>
          </div>
          <div className={cn("card__item", "card__downloads")}>
            {nDownloads}&nbsp;
            <i class="fa fa-download"></i>
          </div>
        </div>
        <div className="vd-read">READ</div>
      </div>
    </div>
  )  
}

export default Card;