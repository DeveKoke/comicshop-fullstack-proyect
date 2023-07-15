import { LinkContext } from "../../../context/LinkContext";
import { useContext } from "react";
import {Link} from "react-router-dom";

const Manga = () => {

  const {setLink} = useContext(LinkContext);
  const handleClick = (name) =>{
    setLink(name)
  }

  return (

    <section>
      <h1>MANGA</h1>
      <div className="solicitadosWrapper">
        <Link to="/results"><div className="solicitadosCard">
          <h3>NARUTO</h3>
           <img src="/assets/Naruto.jpg" alt="Naruto" onClick={() => handleClick("Naruto")} /> 
        </div></Link>
      <Link to="/results"><div className="solicitadosCard">
          <h3>DRAGON BALL</h3>
          <img src="/assets/Dragon.jpg" alt="Dragon Ball" onClick={() => handleClick("Dragon Ball")} />
      </div></Link>
      <Link to="/results"><div className="solicitadosCard">
          <h3>ONE PIECE</h3>
          <img src="/assets/One_piece.jpg" alt="One Piece" onClick={() => handleClick("One")} />
        </div></Link>
      </div>
    </section>

  );
};

export default Manga;
