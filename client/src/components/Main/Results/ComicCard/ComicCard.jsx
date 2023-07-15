import ReactCardFlip from "react-card-flip";
import { useState } from "react";

const ComicList = ({ title, img, pages, price, description }) => {

  const [flip, setFlip] = useState(false);

  return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
    <div className="comicCard" onClick={() => setFlip(!flip)}>
        <img src={img} alt={`comic ${title}`} />
        <p className="comicCard_title">{title}</p>
        <p className="comicCard_pages">{pages} páginas</p>
        <p className="comicCard_price">{price}€</p>
  </div>
  <div className="comicCard descriptionFlex" onClick={() => setFlip(!flip)}>
      <h4>Descripción: </h4>
      <p className="descriptionCard">{description}</p>
  </div>
    </ReactCardFlip>
  
  );
};

export default ComicList;
