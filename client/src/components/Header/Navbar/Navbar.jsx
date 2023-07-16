import { useState, useContext, useEffect } from "react";
import { LinkContext } from "../../../context/LinkContext";
import { TrolleyContext } from "../../../context/TrolleyContext";
import {Link} from "react-router-dom";



const Navbar = () => {
  const[itemQuantity, setItemQuantity] =  useState(0)

  const {setLink} = useContext(LinkContext);
  const handleClick = (name) =>{
    setLink(name)
  }


  const {itemList} = useContext(TrolleyContext);
  useEffect(() => {
    setItemQuantity(itemList.length);
  }, [itemList]);

  return (
  <nav className="navbar">
    <ul className="ul_navbar">
      <Link className='link' to="/">HOME</Link>
      <Link className='link' to="/Manga">MANGA</Link>
      <Link className='link' to="/superheroes">SUPERHÉROES</Link>
      <Link className='link' to="/generos">GÉNEROS</Link>
      <Link className='link' to="/results" onClick={() => handleClick("Clasicos")} >CLÁSICOS</Link>
      <Link className='link' to="/trolley"> <div> <img src="/assets/trolley.png" alt="Carrito de compra" className="trolley" /> <span className="numberTrolley">  {itemQuantity}  </span> </div></Link>
    </ul>
</nav>
  );
};

export default Navbar;
