import './Home.css'

import { useState, useEffect } from "react"

//Components
import MoviesContainer from '../components/MoviesContainer';
import FetchMovies from '../hooks/FetchMovies';
import CategoriesSection from '../components/CategoriesSection';

const moviesURL = import.meta.env.VITE_API;
const discoveryURL= import.meta.env.VITE_DISCOVERY;
const apiKey = import.meta.env.VITE_API_KEY;



const Home = () => {

  //GET TOP MOVIES
  const [topMovies, setTopMovies] = useState({});
  const [ratedMovies, setRatedMovies] = useState({});
  const [actionMovies, setActionMovies] = useState({});
  const [mysteryMovies, setMysteryMovies] = useState({});
  const [dramaMovies, setDramaMovies] = useState({});
  const [comedyMovies, setComedyMovies] = useState({});
  const [fictionMovies, setFictionMovies] = useState({});
  const [animMovies, setAnimMovies] = useState({});
  const [fantasyMovies, setFantasyMovies] = useState({});

  //SET GENRES MOVIES
  const getTopMovies = async () => {
    const url = `${discoveryURL}?${apiKey}&sort_by=popularity.desc&language=pt-BR`;
    const data = await FetchMovies(url);
    
    setTopMovies(data);
  };

  const getRatedMovies = async () => {
    const url = `${moviesURL}/top_rated?${apiKey}&language=pt-BR`;
    const data = await FetchMovies(url);
    
    setRatedMovies(data);
  };

  const getMoviesByGenre = async (id) => {
    const url = `${discoveryURL}?${apiKey}&with_genres=${id}&sort_by=popularity.desc&language=pt-BR`;
    const data = await FetchMovies(url);
    
    return data;
  };

  const setStates = async () => {
    const action = await getMoviesByGenre("28,12");
    const mystery = await getMoviesByGenre("9648,80,27");
    const drama = await getMoviesByGenre("18");
    const comedy = await getMoviesByGenre("35,10751");
    const fiction = await getMoviesByGenre("878");
    const anim = await getMoviesByGenre("16");
    const fantasy = await getMoviesByGenre("14");

    setActionMovies(action);
    setMysteryMovies(mystery);
    setDramaMovies(drama);
    setComedyMovies(comedy);
    setFictionMovies(fiction);
    setAnimMovies(anim);
    setFantasyMovies(fantasy);

  }

  useEffect(() => {
    getTopMovies();
    getRatedMovies();
    setStates();
  }, []);


  return (
    <div className="container">
      <MoviesContainer moviesArray={topMovies} config={{title: "Populares", subtitle: "Conheça as tendências de filmes do momento."}}/>
      <MoviesContainer moviesArray={ratedMovies} config={{title: "Mais Avaliados", subtitle: "Os filmes mais avaliados pela comunidade."}}/>
    
      <CategoriesSection />
    </div>
  )
}

export default Home