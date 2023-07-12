const express = require("express");
const router = express.Router();

const comicController = require("../controllers/comicsControllers");

// Comics routes
router.get("/comics", comicController.getAllComics);
router.get("/comics/novelties", comicController.findNovelties);
router.get('/comics/:title', comicController.findComicFromTitle);
router.get("/comics/collection/:serie", comicController.findComicFromSerie);
router.get("/comics/character/:character", comicController.findComicFromCharacter);

router.post("/comics", comicController.createComic);

router.put("/comics", comicController.updateAllComics);
router.put("/comics/novelties", comicController.updateComicNovelty);


module.exports = router;
