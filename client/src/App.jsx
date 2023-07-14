import './App.css'
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { SearchContext } from "./context/SearchContext";
import { useState } from 'react'


function App() {
  const[searchValue, setSearchValue]=useState('');


  const searchObj= {
    searchValue, setSearchValue
  }

 

  return (
    <>
    <BrowserRouter>
    <SearchContext.Provider value={searchObj} >
      <Header />
      <Main />
    </SearchContext.Provider >
      <Footer />
    </BrowserRouter>
    </>
  )
};

export default App;
