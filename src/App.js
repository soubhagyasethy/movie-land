import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
// Api key: fdf2398f

const API_URL = "http://www.omdbapi.com?apikey=fdf2398f";

function App() {

  const [movies, setMovies] = useState([]);

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies("Batman")
  }, [])

  return (
    <div className="App">
      <h1>MovieLand</h1>

      <div className="search">
        <input 
        type="text"
        value=""
        placeholder='Search for movies'
        onChange={() => {}} 
        />
      </div>

      {
        movies.length > 0 ? (
          <div className="container">
            <MovieCard movies={movies}/>
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }
      
    </div>
  );
}

export default App;
