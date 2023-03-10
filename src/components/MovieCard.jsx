import "./MovieCard.css"

import {Link} from "react-router-dom";

import {FaStar} from "react-icons/fa";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({movie, width, height}) => {

  const styleTransform = {
    width: width,
    height: height
  }

  return (
    <div className="movie_card" style={styleTransform}>
      <Link to={`/movie/${movie.id}`}>
        <img src={imageUrl + movie.poster_path} alt={movie.title} style={styleTransform}/>
          <div className="card_info">
            <p className="movie_title_card">{movie.title}</p>
            <p className="star_points">
                <FaStar /> {movie.vote_average}
            </p>
            <p className="released">{movie.release_date.substr(0, 4)}</p>
          </div>
      </Link>
    </div>
  )
}

export default MovieCard