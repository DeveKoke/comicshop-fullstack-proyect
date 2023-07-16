import { LinkContext } from "../../../context/LinkContext";
import { useContext } from "react";
import {Link} from "react-router-dom";

const Superheroes = () => {

  const {setLink} = useContext(LinkContext);
  const handleClick = (name) =>{
    setLink(name)
  }

  return (

    <section>
      <h1>SUPERHÉROES</h1>
      <div className="solicitadosWrapper">
        <Link to="/results"><div className="solicitadosCard">
          <h3>MARVEL</h3>
           <img src="/assets/MARVEL.jpg" alt="MARVEL" onClick={() => handleClick("Marvel")} /> 
        </div></Link>
      <Link to="/results"><div className="solicitadosCard">
          <h3>DC</h3>
          <img src="/assets/DC.jpg" alt="DC" onClick={() => handleClick("DC")} />
      </div></Link>
      <Link to="/results"><div className="solicitadosCard">
          <h3>BATMAN</h3>
          <img src="/assets/Batman1.jpg" alt="Batman" onClick={() => handleClick("Batman")} />
        </div></Link>
        <Link to="/results"><div className="solicitadosCard">
          <h3>SPIDERMAN</h3>
          <img src="/assets/Spidey.jpg" alt="spiderman" onClick={() => handleClick("Spiderman")} />
        </div></Link>
      <Link to="/results"><div className="solicitadosCard">
          <h3>MUTANTES</h3>
          <img src="/assets/Xmen2.png" alt="Mutantes" onClick={() => handleClick("Mutantes")} />
        </div></Link>
        <Link to="/results"><div className="solicitadosCard">
          <h3>SUPERMAN</h3>
          <img src="/assets/Superman1.jpg" alt="Superman" onClick={() => handleClick("Superman")} />
        </div></Link>
        <Link to="/results"><div className="solicitadosCard">
          <h3>THOR</h3>
          <img src="/assets/Thor.jpg" alt="Thor" onClick={() => handleClick("Thor")} />
        </div></Link>
        <Link to="/results"><div className="solicitadosCard">
          <h3>LOS 4 FANTASTICOS</h3>
          <img src="/assets/4F.jpg" alt="Los 4 Fantasticos" onClick={() => handleClick("Los Cuatro Fantásticos")} />
        </div></Link>
      </div>
    </section>

  );
};

export default Superheroes;
