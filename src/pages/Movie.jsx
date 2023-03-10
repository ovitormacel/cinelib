import "./Movie.css";

import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";

//Icons
import { FaMoneyBill, FaShareAlt, FaStar, FaWallet } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG;

const Movie = () => {

  const {id} = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  };

  const formatDolar = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const getCategories = (genres) => {
    let generosString = "";

     if(genres.length != 0) {
      genres.map((genre) => {
        generosString = generosString + ', ' + genre.name;
      })
      generosString = generosString.substring(2);
     }

     return(generosString);
  }

  useEffect(() => {
    const movieUrl = `${moviesURL}/${id}?${apiKey}&language=pt-BR`;
    getMovie(movieUrl);
  }, []);

  return (
    <div>
      {!movie && <p>Carregando...</p>}
      {movie && (
        <div className="movie_content container">
          <img src={imageUrl + movie.poster_path} alt={movie.title} />
          <div className="movie_infos">
            <div className="info">
              <h4 className="movie_title">{movie.title} - {movie.release_date.substr(0, 4)}</h4>
            </div>

            <div className="info main_infos">
              <p className="movie_categories">{getCategories(movie.genres)}</p><p className="duration">{movie.runtime} Min</p>
            </div>

            <hr />

            <div className="info movie_stars_info">
              <p className="movie_stars"><FaStar /> {movie.vote_average} / 10</p>
              <div className="utils_links">
                <a href="#" className="link"><MdFavoriteBorder /></a>
                <a href="#" className="link"><FaShareAlt /></a>
              </div>
            </div>

            <div className="info description_info">
              <h4 className="description_title">Sinopse:</h4>
              <p className="budget">{movie.overview}</p>
            </div>
            
            <div className="budget_infos">
              <div className="info">
                <h4 className="budget_title"><FaWallet /> Orçamento:</h4>
                <p className="budget">{formatDolar(movie.budget)}</p>
              </div>

              <div className="info">
                <h4 className="budget_title"><FaMoneyBill /> Receita:</h4>
                <p className="revenue">{formatDolar(movie.revenue)}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Movie