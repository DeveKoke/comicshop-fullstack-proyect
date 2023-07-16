import ReactCardFlip from "react-card-flip";
import { TrolleyContext } from "../../../../context/TrolleyContext";
import { useEffect, useState, useContext } from "react";
import axios from 'axios';



const ComicList = ({ title, img, pages, price, description }) => {

  const [item, setItem] = useState('')
  const [itemData, setItemData] = useState({})
  const {itemList, setItemList} = useContext(TrolleyContext);
  const [flip, setFlip] = useState(false);

  const handleClick = (name) =>{
    setItem(name)
  }
  
  const url = `api/comics/${item}`;
  
  useEffect(() =>{
    
    if(item.length>0){
      const getComicsbyName = async () => {
        await axios.get(url).then((response) => {
          setItemData(response.data);
        })
      }
      getComicsbyName();
    }    
  }, [item])
  
  
  useEffect(() =>{
    if(itemData.length>0){
      
      const itemInfo = {
        title: itemData[0].title, 
        img: itemData[0].img,
        price: itemData[0].price
      }
      setItemList([...itemList, itemInfo])
    }
  },[itemData])
  
  
  // console.log(item);
  // console.log(itemData);
  // console.log(itemList);




  return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
    <div className="comicCard" onClick={() => setFlip(!flip)}>
        <img src={img} alt={`comic ${title}`} />
        <p className="comicCard_title">{title}</p>
        <p className="comicCard_pages">{pages} páginas</p>
        <p className="comicCard_price">{price}€</p>
        <button onClick={() => handleClick(title)} className="addToTrolley"> AÑADIR Al CARRITO </button>
    </div>
    <div className="comicCard descriptionFlex" onClick={() => setFlip(!flip)}>
        <h4>Descripción: </h4>
        <p className="descriptionCard">{description}</p>
    </div>
    </ReactCardFlip>
  
  );
};

export default ComicList;
