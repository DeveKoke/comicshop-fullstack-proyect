const Order = require("../models/ordersSchema");


// POST -> http://localhost:3000/orders/neworder
// Crea un nuevo pedido
const createOrder = async (req, res) => {
    try {
        const {
        user_name,
        user_lastname,
        adress,
        postalCode,
        products
        } = req.body;
        if (!user_name || !user_lastname || !adress || !postalCode) {
        return res
            .status(400)
            .json({ error: "Los campos user_name, user_lastname, adress, postalCode y products son requeridos." });
        }
        const newOrder = await Order.create({
            user_name,
            user_lastname,
            adress,
            postalCode,
            products
        });
        const result = await newOrder.save();
        res.status(201).json(result);
    //   res.redirect('/admin')
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  };    

  module.exports =  {
    createOrder
  };

  // {
//   "user_name": "Pepito",
//   "user_lastname": "Pérez González",
//   "adress": "calle toledo, 2, piso 3A",
//   "postalCode": 28031,
//   "products":[{"title": "Los cuatro Fantásticos 9. Correr.",
//     "price":"14.90"
//   }]
// }