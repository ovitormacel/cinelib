import "./Header.css"

import { Link, useNavigate } from 'react-router-dom'
import { BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";

const Header = () => {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearchButton = (e) => {
    e.preventDefault();
    
    if(!search) return;

    navigate(`/search?q=${search}`);
  }

  return (
    <header id='header'>
        <div className="container">
          <h2 className="logo"><Link to="/">Cine<span>Lib</span></Link></h2>
          <form className="search_form" onSubmit={(e) => handleSearchButton(e)}>
              <input type="text" placeholder='Busque por filmes' onChange={(e) => setSearch(e.target.value)} value={search} />
              <button type="submit"><BiSearchAlt2 /></button>
          </form>
        </div>
    </header>
  )
}

export default Header