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
    <>
      <section className='sectionNovelties'>
        <h2>ÚLTIMAS NOVEDADES</h2>
        <img src="/assets/NicePng_explotion-png_1023015.png" alt="" className="imgTitleResults" />
        <article className='sliderContainer'>
            {printNovelties()} 
        </article>
      </section>
      <section className='infoShopWrapper'>
        <InfoShop />
      </section>
    </>
  );
};

export default Home;
