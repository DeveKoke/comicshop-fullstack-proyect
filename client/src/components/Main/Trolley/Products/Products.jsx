import { useContext } from "react";
import { TrolleyContext } from "../../../../context/TrolleyContext";

const Products = ({ title, img, price }) => {

  const {itemList, setItemList} = useContext(TrolleyContext);

  const handleDelete = () => {
    // Filtrar itemList para eliminar el objeto con el id correspondiente
    const updatedItemList = itemList.filter(item => item.title !== title);
    setItemList(updatedItemList);
  };

  return (
  
    <div className="productContainer">
      <img src={img} alt="imagen producto" />
      <p>{title}</p>
      <span>{price} €</span>
      <button onClick={handleDelete}>ELIMNAR</button>
    </div>
    
  
  );
};

export default Products;
