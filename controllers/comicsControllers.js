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


  // GET -> /comics/produtcts/:title
//  Encontrar comics por titulo
const findComicFromTitle = async (req, res) => {
  const { title } = req.query;
  try {
    const comics = await Comic.find({ title },  '-_id -__v');
    if (comics.length > 0) {
      console.log(`Cómics de la colección "${title}" encontrados`);
      res.status(200).json(comics);
    } else {
      res.status(404).json({
        msj: `No se encontraron cómics con el título "${title}".`
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
    if (!title || !img || !serie || !pages || !price || !description) {
      return res
        .status(400)
        .json({ error: "Los campos título, imagen, serie, páginas, precio, descripción y novelty son obligatorios." });
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


// PUT -> http://localhost:3000/api/comics/:title
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


 


  const findComics = async (req, res) => {
    const valorBusqueda = req.params.valor; // valor introducido al final de la URL
  
    const page = parseInt(req.query.page) || 1;  //para que empiece en página 1
    const limit = 3; 
    const skipIndex = (page - 1) * limit;
  
    try {
      const comics = await Comic.find({
        $or: [
          { title: { $regex: valorBusqueda, $options: "i" } }, // Opción para ignorar mayúsculas y minúsculas en el campo de búsqueda
          { serie: { $regex: valorBusqueda, $options: "i" } },
          { character: { $regex: valorBusqueda, $options: "i" } }, 
        ],
      })
        .skip(skipIndex)
        .limit(limit);
  
      res.json(comics);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Ocurrió un error al buscar los comics." });
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
      updateComicNovelty,
      findComics
    };
