const express = require("express");
const router = express.Router();

const comicController = require("../controllers/comicsControllers");

// Comics routes
router.post("/comics", comicController.createComic);
router.get("/comics/:serie", comicController.findComicFromSerie);
router.get("/comics/:character", comicController.findComicFromCharacter);

module.exports = router;
