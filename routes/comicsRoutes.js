const express = require("express");
const router = express.Router();

const comicController = require("../controllers/comicsControllers");

// Comics routes
router.get("/comics/all", comicController.getAllComics);
router.get("/comics/novelties", comicController.findNovelties);
router.get('/comics/produtcts/:title', comicController.findComicFromTitle);
router.get("/comics/collection/:serie", comicController.findComicFromSerie);
router.get("/comics/character/:character", comicController.findComicFromCharacter);
router.get("/comics/:valor", comicController.findComics);


router.post("/comics", comicController.createComic);

router.put("/comics", comicController.updateAllComics);
router.put("/comics/novelties", comicController.updateComicNovelty);


module.exports = router;
