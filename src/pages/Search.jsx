import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  //GET MOVIES
  const [movies, setMovies] = useState([]);
  
  const getSearchMovies = async (url) => {
    const res =  await fetch(url);
    const data = await res.json();

    setMovies(data.results);
  };


  useEffect(() => {
    const searchMoviesUrl = `${searchURL}?${apiKey}&query=${query}&language=pt-BR`;
    getSearchMovies(searchMoviesUrl);
  }, [query]);

  return (
    <div className="top_movies container">
      <div className="title_page">
        <h4 className="title">Resultados para: {query}</h4>
      </div>
      <div className="movies_search_list">
        {movies.length === 0 && <p>Sem Resultados.</p>}
        {movies.length > 0 && movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} width={220} height={340}/>
        ))}
      </div>
    </div>
  )
}

export default Search