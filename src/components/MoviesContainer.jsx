import "./MoviesContainer.css"
import { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import MovieCard from './MovieCard';

const MoviesContainer = (props) => {

    const movies = props.moviesArray;
    const config = props.config;

    //CARROSEL
    const [listTopPosition, setListTopPosition] = useState(0); 
    
    const handleMoveRight = (e) => {
        if(listTopPosition > -4160){
            setListTopPosition(listTopPosition - 1040);
        }
    }
    
    const handleMoveLeft = (e) => {
        if(listTopPosition < 0){
        setListTopPosition(listTopPosition + 1040);
        }
    }

    const stylesMoveList = {
        transform: `translateX(${listTopPosition}px)`
    };

    return (
        <div>
            <div className="top_movies container">
                <div className="title_page">
                    <h4 className="title">{config.title}</h4>
                    <p className="sub_title">{config.subtitle}</p>
                </div>
                <div className="movies_list_container">
                    <div className="buttons_carrosel">
                        <button className='btn btn_left' onClick={handleMoveLeft}><AiOutlineArrowLeft /></button>
                        <button className='btn btn_right' onClick={handleMoveRight}><AiOutlineArrowRight /></button>
                    </div>
                    <div className="movies_list" style={stylesMoveList}>
                        {movies.length === 0 && <p>Carregando...</p>}
                        {movies.length > 0 && movies.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} width={220} height={340}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoviesContainer