import './App.css'
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { SearchContext } from "./context/SearchContext";
import { LinkContext } from "./context/LinkContext";
import { TrolleyContext } from './context/TrolleyContext';
import { useState } from 'react'


function App() {
  const[searchValue, setSearchValue]=useState('');
  const[link, setLink]=useState('')
  const [itemList, setItemList] = useState([]) //debe ser un useContext alojado en Main


  const searchObj = {
    searchValue, setSearchValue
  }
  const linkObj = {
    link, setLink
  }
  const itemListArr = {
    itemList, setItemList
  }

 

  return (
    <>
    <BrowserRouter>
    <SearchContext.Provider value={searchObj} >
    <LinkContext.Provider value={linkObj} >
    <TrolleyContext.Provider value={itemListArr} >
      <Header />
      <Main />
    </TrolleyContext.Provider>
    </LinkContext.Provider>
    </SearchContext.Provider >
      <Footer />
    </BrowserRouter>
    </>
  )
};

export default App;
