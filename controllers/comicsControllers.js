const Comic = require("../models/comicsSchema");
console.log('estoy en controllers');
// GET -> http://localhost:3000/api/comics:serie
//  Encontrar comics por serie
const findComicFromSerie = async (req, res) => {
  const { serie } = req.params;
  try {
    const comics = await Comic.find({ serie });
    if (comics.length > 0) {
      console.log(`Cómics de la serie "${serie}" encontrados`);
      res.status(200).json(comics);
    } else {
      res.status(404).json({
        msj: `No se encontraron cómics de la serie "${serie}".`
      });
    }
  } catch (error) {
    console.log(`ERROR: ${error}`);
    res.status(500).json({
      msj: `ERROR: ${error}`
    });
  }
};


// GET -> http://localhost:3000/api/comics:character
//  Encontrar comics por personaje
const findComicFromCharacter = async (req, res) => {
  const { character } = req.params;
  try {
    const comics = await Comic.find({ character });
    if (comics.length > 0) {
      console.log(`Cómics de "${character}" encontrados`);
      res.status(200).json(comics);
    } else {
      res.status(404).json({
        msj: `No se encontraron cómics de la character "${character}".`
      });
    }
  } catch (error) {
    console.log(`ERROR: ${error}`);
    res.status(500).json({
      msj: `ERROR: ${error}`
    });
  }
};



// POST -> http://localhost:3000/api/comics
// Crea un nuevo comic
const createComic = async (req, res) => {
    const {
        title,
        img,
        serie,
        character,
        pages,
        price,
        description
    } = req.body;
    if (!title || !img || !serie || !pages || !price || !description) {
      return res
        .status(400)
        .json({ error: "Los campos título, imagen, serie, páginas, precio y descripción son obligatorios." });
    }
    try {
      const newComic = await Comic.create({
        title,
        img,
        serie,
        character,
        pages,
        price,
        description
      });
      const result = await newComic.save();
      res.status(201).json(result);
    //   res.redirect('/admin')
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  };    


  module.exports =  {
    createComic,
    findComicFromSerie,
    findComicFromCharacter
  };
