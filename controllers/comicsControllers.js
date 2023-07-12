  const Comic = require("../models/comicsSchema");


  // GET -> http://localhost:3000/api/comics
  //  Encontrar todos los comics
  const getAllComics = async (req, res) => {
    try{ 
      const comics = await Comic.find({},  '-_id -__v');
    console.log('hemos encontrado todos los comics');
      res.status(200).json(comics);

    }catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
      }
  }



  // GET -> http://localhost:3000/api/comics:title
//  Encontrar comics por nombre
const findComicFromTitle = async (req, res) => {
  const { title } = req.params;
  try {
    const comics = await Comic.find({ title },  '-_id -__v');
    if (comics.length > 0) {
      console.log(`Cómics de la colección "${title}" encontrados`);
      res.status(200).json(comics);
    } else {
      res.status(404).json({
        msj: `No se encontraron cómics de la title "${title}".`
      });
    }
  } catch (error) {
    console.log(`ERROR: ${error}`);
    res.status(500).json({
      msj: `ERROR: ${error}`
    });
  }
};




// GET -> http://localhost:3000/api/comics/collection:serie
//  Encontrar comics por serie
const findComicFromSerie = async (req, res) => {
  const { serie } = req.params;
  try {
    const comics = await Comic.find({ serie },  '-_id -__v');
    if (comics.length > 0) {
      console.log(`Cómics de la colección "${serie}" encontrados`);
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



// GET -> http://localhost:3000/api/character/:character
//  Encontrar comics por personaje
const findComicFromCharacter = async (req, res) => {
  const { character } = req.params;
  try {
    const comics = await Comic.find({ character },  '-_id -__v');
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


  // GET -> http://localhost:3000/api/novelties
//  Encontrar Novedades
const findNovelties = async (req, res) => {
  try {
    const comics = await Comic.find({ novelty:true },  '-_id -__v');
    if (comics.length > 0) {
      res.status(200).json(comics);
    } else {
      res.status(404).json({
        msj: `No se encontraron los comics de novedades.`
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
        description,
        novelty
    } = req.body;
    if (!title || !img || !serie || !pages || !price || !description || !novelty) {
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
        description,
        novelty
      });
      const result = await newComic.save();
      res.status(201).json(result);
    //   res.redirect('/admin')
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  };    


// PUT -> http://localhost:3000/api/comics
// Editar campos en todos los comics
  const updateAllComics = async (req, res) => {
    const { fieldsToUpdate } = req.body;
    try {
      await Comic.updateMany({}, fieldsToUpdate);
      console.log('Todos los cómics se han actualizado');
      res.status(200).json({ message: 'Todos los cómics se han actualizado' });
    } catch (error) {
      console.log(`ERROR: ${error}`);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


// POST -> http://localhost:3000/api/comics/:title
// Editar campo novedad en un comic por título
  const updateComicNovelty = async (req, res) => {
    const { title } = req.params;
    const { novelty } = req.body;
    try {
      const comic = await Comic.findOne({ title });
      if (!comic) {
        return res.status(404).json({ error: `No se encontró ningún cómic con el título "${title}"` });
      }
      comic.novelty = novelty;
      await comic.save();
      console.log(`Se ha actualizado el campo "novelty" del cómic "${title}"`);
      res.status(200).json({ message: `Se ha actualizado el campo "novelty" del cómic "${title}"` });
    } catch (error) {
      console.log(`ERROR: ${error}`);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

    module.exports =  {
      getAllComics,
      findComicFromTitle,
      findNovelties,
      findComicFromSerie,
      findComicFromCharacter,
      createComic,
      updateAllComics,
      updateComicNovelty
    };
