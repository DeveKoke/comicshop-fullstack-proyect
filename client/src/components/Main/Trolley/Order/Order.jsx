import { useForm } from "react-hook-form";
import { useState,useContext } from "react";
import axios from 'axios';
import { TrolleyContext } from '../../../../context/TrolleyContext';



const Order = () => {

  const [orderData, setOrderData] = useState({});
  const [orderSuccess, setOrderSuccess] = useState(false); 

  const {itemList} = useContext(TrolleyContext);
  const productData = itemList.map(item => ({
    titleProduct: item.title,
    price: item.price
  }));

  const url = 'orders/neworder';
  
  const userData = (data) => {
    const { user_name, user_lastname, email, adress, postalCode } = data;
    setOrderData({
      user_name: user_name,
      user_lastname:user_lastname,
      email: email,
      adress: adress,
      postalCode: postalCode,
      products:productData
    })

    axios.post(url, orderData)
    .then(() => {
      setOrderSuccess(true); // Actualiza el estado para mostrar el mensaje de éxito
    })
      .catch(error => {
        error.status(500);
      });
    }
    console.log(orderData);
    
    
    const {register, formState:{errors}, handleSubmit} = useForm();
    const regexPostalCode = /^(0[1-9]|[1-4]\d|5[0-2])\d{3}$/;
    const regexName = /^[^-@*]+$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return (
    <>
    <h2>Realiza tu pedido</h2>
    <form onSubmit={handleSubmit(userData)}>
      <label>NOMBRE</label>
      <input type="text" maxLength={30}{...register("user_name", {
        required:true, 
        pattern:regexName
        } )}/>
              {errors.user_name?.type === 'required' && <p className="requiredMessage">Introduce un nombre válido</p>}

      <label>APELLIDOS</label>
      <input type="text" maxLength={40}{...register("user_lastname", {
        required:true, 
        pattern:regexName
        } )} />
              {errors.user_lastname?.type === 'required' && <p className="requiredMessage">Introduce un apellido válido</p>}

      <label>DIRECCIÓN EMAIL</label>
      <input type="text" maxLength={100}{...register("email", {
        required:true, 
        pattern:regexEmail
        } )}  />

      <label>DIRECCIÓN</label>
      <input type="text" maxLength={100}{...register("adress", {
        required:true, 
        } )}  />

      <label>CÓDIGO POSTAL</label>
      <input type="text"{...register("postalCode", {
        required:true, 
        pattern:regexPostalCode
        } )}  />
              {errors.postalCode?.type === 'pattern' && <p className="requiredMessage">Código postal no válido. Introduce un código postal válido en territorio español </p>}

      <input type="submit" value="REALIZAR PEDIDO" />
    </form>

    {orderSuccess && (<p className="orderDoneMessage">Tu pedido se realizó correctamente</p>)}
    </>

  );
};

export default Order;
