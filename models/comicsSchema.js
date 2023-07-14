const { Decimal128 } = require("mongodb");
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
    serie: {
        type: String,
        required: true,
    },
    character: String,
    pages: {
        type: Number,
        required: true,
    },
    price:{
        type:String,
        require: true,
        },
    description:{
        type: String,
        required: true,
    },
    novelty:{
        type: Boolean,
        required: true,
    }
});

const comic = mongoose.model("comic", comicSchema);

module.exports = comic;

