const moviesURL = import.meta.env.VITE_API;
const discoveryURL= import.meta.env.VITE_DISCOVERY;
const apiKey = import.meta.env.VITE_API_KEY;

export const FetchMovies = async (url) => {

    const res =  await fetch(url);
    const data = await res.json();

    return data.results;
}

export default FetchMovies