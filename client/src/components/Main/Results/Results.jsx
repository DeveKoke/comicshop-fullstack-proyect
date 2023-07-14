import { useEffect, useContext, useState } from "react";
import { SearchContext } from "../../../context/SearchContext";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import ComicCard from "./ComicCard/ComicCard";

const Results = () => {
  
  const {searchValue} = useContext(SearchContext);
  const [comicList, setComicList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1); // Estado para rastrear la página actual

  const url = `api/comics/${searchValue}?page=${currentPage}`;
  console.log(searchValue);
  useEffect(() =>{

    if(searchValue.length>0){
      const getComicsbyName = async () => {
        await axios.get(url).then((response) => {
          setComicList(response.data);
        })
        .catch((error) => {
          if ( error.response.status === 404) {
            setErrorMessage(`No se pudo encontrar comics sobre "${searchValue}". Por favor, prueba otro nombre`);
            setTimeout(() => {
              setErrorMessage('');
            }, 5000); 
          }
        });
      }
      getComicsbyName();
    }
    
  }, [searchValue, currentPage])
  
  const printComics = () => comicList.map(item => <ComicCard title={item.title} img={item.img} pages={item.pages} price={item.price} description={item.description} key={uuidv4()} />)
  
  
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  // console.log(comicList);
  const goToNextPage = () => {
      setCurrentPage(currentPage + 1);
  };

  const totalPages = Math.ceil(comicList.length);
  const hasNextPage = currentPage < totalPages;


  return (
<section className="resultsContainer">
    <h1>{searchValue.toUpperCase()}</h1>  
    <img src="/assets/NicePng_explotion-png_1023015.png" alt="" className="imgTitleResults" />
    <article>
        <div className="pagination">

          <img className="arrowsResults" src="assets/left arrow.png" alt="botón izquierda" onClick={goToPreviousPage} disabled={currentPage === 1} />
          <img className="arrowsResults" src="assets/right-arrow.png" alt="botón derecha" onClick={goToNextPage} disabled={!hasNextPage}/>
          {/* <button >Anterior</button>
          <button  >Siguiente</button> */}
        </div>
    </article>
    <article className="comicList">
        {printComics()}
    </article>
{errorMessage && <div> <p>{errorMessage}</p> </div>}
</section>  );
};

export default Results;
