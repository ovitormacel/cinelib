import "./CategoriesSection.css"
import {useState, useEffect} from 'react'

const discoveryURL= import.meta.env.VITE_DISCOVERY;
const apiKey = import.meta.env.VITE_API_KEY;

import MovieCard from './MovieCard';

import FetchMovies from '../hooks/FetchMovies';

const CategoriesSection = () => {

  const [movies, setMovies] = useState([]);
  const [genresTitle, setGenresTitle] = useState("Ação");

  const buttonsGenresEl = document.querySelectorAll(".genre_btn")

  const getMoviesByGenre = async (id) => {
    const url = `${discoveryURL}?${apiKey}&with_genres=${id}&language=pt-BR`;
    const data = await FetchMovies(url);
    
    setMovies(data);
  };

  const handleChangeCategory = (e) => {
    if(!e.target.classList.contains("active")){

      let genresId = e.target.id;

      setGenresTitle(e.target.value);

      getMoviesByGenre(genresId);

      buttonsGenresEl.forEach((el) => {
        el.classList.remove("active");
      })

      e.target.classList.toggle("active");
      
    }
  }

  useEffect(()=>{
    getMoviesByGenre(28);
  }, [])

  return (
    <div className="section" id="genresSection">
      <div className="title_page">
          <h4 className="title">Categoria: {genresTitle}</h4>
      </div>
      <div className="categoriesSection">
        <div className="moviesList">
          {movies.length === 0 && <p>Carregando...</p>}
          {movies.length > 0 && movies.map(movie => (
            <div className="card" key={movie.id}><MovieCard key={movie.id} movie={movie} width={170} height={250}/></div>
          ))}
        </div>

        <div className="nav_genres">
            <nav className='nav_sidebar'>
                <ul>
                    <li><button className="genre_btn active" id='28' onClick={handleChangeCategory} value="Ação">Ação</button></li>
                    <li><button className="genre_btn" id='12' onClick={handleChangeCategory} value="Aventura">Aventura</button></li>
                    <li><button className="genre_btn" id='16' onClick={handleChangeCategory} value="Animação">Animação</button></li>
                    <li><button className="genre_btn" id='35' onClick={handleChangeCategory} value="Comédia">Comédia</button></li>
                    <li><button className="genre_btn" id='80' onClick={handleChangeCategory} value="Crime">Crime</button></li>
                    <li><button className="genre_btn" id='99' onClick={handleChangeCategory} value="Documentário">Documentário</button></li>
                    <li><button className="genre_btn" id='18' onClick={handleChangeCategory} value="Drama">Drama</button></li>
                    <li><button className="genre_btn" id='10751' onClick={handleChangeCategory} value="Família">Família</button></li>
                    <li><button className="genre_btn" id='14' onClick={handleChangeCategory} value="Fantasia">Fantasia</button></li>
                    <li><button className="genre_btn" id='36' onClick={handleChangeCategory} value="História">História</button></li>
                    <li><button className="genre_btn" id='27' onClick={handleChangeCategory} value="Terror">Terror</button></li>
                    <li><button className="genre_btn" id='10402' onClick={handleChangeCategory} value="Música">Música</button></li>
                    <li><button className="genre_btn" id='9648' onClick={handleChangeCategory} value="Mistério">Mistério</button></li>
                    <li><button className="genre_btn" id='10749' onClick={handleChangeCategory} value="Romance">Romance</button></li>
                    <li><button className="genre_btn" id='878' onClick={handleChangeCategory} value="Ficção Científica">Ficção Científica</button></li>
                    <li><button className="genre_btn" id='10770' onClick={handleChangeCategory} value="TV">TV</button></li>
                    <li><button className="genre_btn" id='53' onClick={handleChangeCategory} value="Suspense">Suspense</button></li>
                    <li><button className="genre_btn" id='10752' onClick={handleChangeCategory} value="Guerra">Guerra</button></li>
                    <li><button className="genre_btn" id='37' onClick={handleChangeCategory} value="Faroeste">Faroeste</button></li>
                </ul>
            </nav>
        </div>
    </div>
    </div>
  )
}

export default CategoriesSection