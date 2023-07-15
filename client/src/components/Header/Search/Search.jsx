import { useState, useContext } from "react";
import { SearchContext } from "../../../context/SearchContext";
import {Link} from "react-router-dom";


const Search = () => {

  const { setSearchValue } = useContext(SearchContext)

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <article >
      <form className="searchBar">
          <input type="text" name="search" onChange={handleChange} placeholder="Búsqueda"/>
          <Link to={"/results"}>
          <input type="submit" value="BUSCAR"  /> 
          </Link>
      </form>
    </article>
  
  );
};

export default Search;