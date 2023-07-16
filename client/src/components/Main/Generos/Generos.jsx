import { LinkContext } from "../../../context/LinkContext";
import { SearchContext } from "../../../context/SearchContext"
import { useContext } from "react";
import {Link} from "react-router-dom";


const Generos = () => {

  const { setSearchValue } = useContext(SearchContext)
  const {setLink} = useContext(LinkContext);

  const handleClick = (name) =>{
    setLink(name);
    setSearchValue(name);
  }

  return(

<section>
      <h1>MÁS GÉNEROS</h1>
      <div className="solicitadosWrapper">
        <Link to="/results"><div className="solicitadosCard">
          <h3>HUMOR</h3>
           <img src="/assets/LOL.jpg" alt="Humor" onClick={() => handleClick("Humor")} /> 
        </div></Link>
        <Link to="/results"><div className="solicitadosCard">
          <h3>NOVELA GRÁFICA</h3>
          <img src="/assets/Novela.jpg" alt="Novela Grafica" onClick={() => handleClick("Novela Grafica")} />
        </div></Link>
        <Link to="/results"><div className="solicitadosCard">
          <h3>INFANTIL</h3>
          <img src="/assets/infantil.jpg" alt="infantil" onClick={() => handleClick("infantil")} />
        </div></Link>
        <Link to="/results"><div className="solicitadosCard">
          <h3>TERROR</h3>
          <img src="/assets/terror.jpg" alt="terror" onClick={() => handleClick("terror")} />
        </div></Link>
      </div>
    </section>

  );
};

export default Generos;
