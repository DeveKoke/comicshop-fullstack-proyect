import Products from './Products/Products';
import Order from './Order/Order';
import { useContext } from 'react';
import { TrolleyContext } from '../../../context/TrolleyContext';
import { v4 as uuidv4 } from 'uuid';


const Trolley = () => {

  const {itemList} = useContext(TrolleyContext);

  const printItemList = () => itemList.map(item => <Products title={item.title} img={item.img} price={item.price}  key={uuidv4()} />)
  const itemsOrder = () => itemList.map(item => <Order title={item.title} price={item.price}  key={uuidv4()} />)


  return (

<section>
  <h1>TU CESTA</h1>
  <article className='trolleyContainer'>
      {printItemList()}
  </article>
  <article>
      {itemsOrder()}
  </article>
</section>

  );
};

export default Trolley;
