import {Routes, Route} from 'react-router-dom';
import Home from './Home/Home';
import Manga from './Manga/Manga';
import Superheroes from './Superheroes/Superheroes';
import Generos from './Generos/Generos';
import Results from './Results/Results';
import Trolley from './Trolley/Trolley';


const Main = () => {

  return (
  <main>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/manga" element={<Manga />}/>
      <Route path="/superheroes" element={<Superheroes/>}/>
      <Route path="/generos" element={<Generos/>}/>
      <Route path="/results" element={<Results />}/>
      <Route path="/trolley" element={<Trolley />}/>
      </Routes>
  </main>
  )
};

export default Main;
