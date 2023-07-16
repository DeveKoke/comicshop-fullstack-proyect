import Products from './Products/Products';
import Order from './Order/Order';
import { useContext, useEffect, useState } from 'react';
import { TrolleyContext } from '../../../context/TrolleyContext';
import { v4 as uuidv4 } from 'uuid';


const Trolley = () => {

  const [total, setTotal] = useState(0)
  const {itemList} = useContext(TrolleyContext);

  const printItemList = () => itemList.map(item => 
  <Products title={item.title} img={item.img} price={item.price}  key={uuidv4()} 
  />)

  console.log(itemList);

  useEffect(() => {
    if(itemList.length>0){
      const priceList = itemList.map(item => ( parseInt(item.price) ));  
      setTotal(priceList.reduce((accumulator, currentValue) => accumulator + currentValue, 0));
    }
}, [itemList])


  return (
    <section className='mainTrolley'>
      <h1>TU CESTA</h1>
      <div className='trolleyContainer'>
      {itemList.length > 0 ? (
          <article className="trolleyProducts">
            {printItemList()}
            <p className='totalPrice'>TOTAL: {total} €</p>
          </article>
        ) : (
          <article className='noTrolleyProducts'>
            <p className='noProductsMessage'>No tienes artículos en tu carrito en este momento</p>
            <img src="/assets/1741.png" alt="spiderman question" className='noProductsImg'/>
          </article>
        )}
        <article className='orderForm'>
            <Order />
        </article>
      </div>
    </section>

  );
};

export default Trolley;
