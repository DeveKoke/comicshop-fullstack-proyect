import {Routes, Route} from 'react-router-dom';

import Clasics from './Clasics/Clasics';
import Home from './Home/Home';
import Manga from './Manga/Manga';
import Superheroes from './Superheroes/Superheroes';
import Generos from './Generos/Generos';
import Results from './Results/Results';


const Main = () => {
  return (
  <main>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/clasics" element={<Clasics/>}/>
      <Route path="/manga" element={<Manga />}/>
      <Route path="/superheroes" element={<Superheroes/>}/>
      <Route path="/generos" element={<Generos/>}/>
      <Route path="/results" element={<Results />}/>
    </Routes>
  </main>
  )
};

export default Main;
