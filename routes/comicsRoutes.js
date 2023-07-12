const express = require("express");
const router = express.Router();

const comicController = require("../controllers/comicsControllers");

// Comics routes
router.get("/comics/collection/:serie", comicController.findComicFromSerie);
router.get("/comics/character/:character", comicController.findComicFromCharacter);
router.get("/comics", comicController.getAllComics);
router.put('/comics/:title', comicController.updateComicNovelty);


// funcionan
router.put('/comics', comicController.updateAllComics);
router.post("/comics", comicController.createComic);


module.exports = router;
