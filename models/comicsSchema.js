const mongoose = require("mongoose");


const comicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    img: {
        type: String,
        required: true,
    },
    colection: {
        type: String,
        required: true,
    },
    character: {
        type: String,
        required: true,
    },
    pages: {
        type: String,
        required: true,
    },
    price:{
        type:Number,
        require: true,
        },
    description:{
        type: String,
        required: true,
    },
});

const comic = new mongoose.model("comics", comicSchema);

module.exports = comic;

