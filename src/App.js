import './App.css';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import SearchIcon from "./search.svg";

//

const API_URL = "http://www.omdbapi.com/?apikey=5c2f59ca";



 const App = () => {
  
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(()=> {
    searchMovies("Shrek");
  }, [])

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();


    setMovies(data.Search);
  };
 


  return (
    <div className='app'>
      <h1>Movie App</h1>
      <div className='search'>
        <input
        placeholder='Search for movies' 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
        src={SearchIcon}
        onClick={() => searchMovies(searchTerm)}
        />
        </div>
        {movies?.length > 0 ? (
            <div className='container'>
            {movies.map((movie, imdbID)=> (
              <MovieCard
              key={imdbID}
               movie={movie}/>
            )
            )}
            </div> 
          ) : (
            <div className='empty'>
              Not movies found
            </div>
          )}
    </div>
  );
}

export default App;
