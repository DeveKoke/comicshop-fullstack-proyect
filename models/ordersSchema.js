const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({
    user_name:{ 
        type: String, 
        required: true 
    },
    user_lastname:{ 
        type: String, 
        required: true 
    },
    email:{
        type:String,
        required:true
    },
    adress:{ 
        type: String, 
        required: true,
    },
    postalCode:{ 
        type: Number, 
        required: true 
    },
    products:[{
        titleProduct:String,
        price:String
    }]
});

const order = mongoose.model("order", orderSchema);

module.exports = order;

// db.update ({'seraching criteria goes here ' },
// {
//  $set : {
//           trk : [ {
//                      "lat": 50.3293714,
//                      "lng": 6.9389939
//                   },
//                   {
//                      "lat": 50.3293284,
//                      "lng": 6.9389634
//                   }
//                ]//'inserted Array containing the list of object'
//       }
// });