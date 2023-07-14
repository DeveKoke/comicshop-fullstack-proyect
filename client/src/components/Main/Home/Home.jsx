import Novelties from './Novelties/Novelties';
import InfoShop from './InfoShop/InfoShop';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";


const Home = () => {

  const [noveltyList, setNoveltyList] = useState([]);
  const url = `api/comics/novelties`;

  useEffect(() =>{

      const getComicsbyName = async () => {
        await axios.get(url).then((response) => {
          setNoveltyList(response.data);
        })

      }
      getComicsbyName();
    
    
  }, [])
  

  const printNovelties = () => noveltyList.map(item => <Novelties title={item.title} img={item.img} price={item.price}  key={uuidv4()} />)



  return (
    <section >
      <h2>NOVEDADES</h2>
      <article className='sliderContainer'>
          {printNovelties()} 
      </article>
        <InfoShop />
    </section>
  );
};

export default Home;
