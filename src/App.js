import { useState,useEffect } from 'react';


import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL="http://www.omdbapi.com/?i=tt3896198&apikey=a135fa27"

const movie1=
  {
    "Title": "Shrek",
    "Year": "2001",
    "imdbID": "tt0126029",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  }


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] =useState('')

  const searchMovies = async(title) => {
    const response  = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies('barbie');
  }, []);

  // let searcher = (event) =>{
  //   const newSearchTerm=event.target.value
  //   setSearchTerm(newSearchTerm);
  // };

  return (
    <div className="app">
      <h1>Cinema</h1>

      <div className='search'>
        <input
          placeholder='Search for a movie'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      { movies.length > 0 
        ? ( 
            <div className='container'>
             {movies.map((movie)=> (
              <MovieCard movie={movie}/>
             ))}
            </div>
        ) : (
            <div className='empty'>
              <h2>No movies Found</h2>
            </div>
        )
      }
      
    </div>
  );
}

export default App;
