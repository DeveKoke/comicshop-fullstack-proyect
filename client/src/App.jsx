import './App.css'
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { SearchContext } from "./context/SearchContext";
import { LinkContext } from "./context/LinkContext";
import { useState } from 'react'


function App() {
  const[searchValue, setSearchValue]=useState('');
  const[link, setLink]=useState('')


  const searchObj = {
    searchValue, setSearchValue
  }
  const linkObj = {
    link, setLink
  }

 

  return (
    <>
    <BrowserRouter>
    <SearchContext.Provider value={searchObj} >
    <LinkContext.Provider value={linkObj} >
      <Header />
      <Main />
    </LinkContext.Provider>
    </SearchContext.Provider >
      <Footer />
    </BrowserRouter>
    </>
  )
};

export default App;
