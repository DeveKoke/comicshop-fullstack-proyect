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
      <img src={img} alt="imagen producto" className="imgProduct" />
      <p>{title}</p>
      <span>{price} €</span>
      <img src="/assets/delete-cross.png" alt="borrar producto" className="deleteCross" onClick={handleDelete} />
    
    </div>
    
  
  );
};

export default Products;
