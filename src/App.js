
import './App.css';
import { useEffect } from 'react';

const API_URL="http://www.omdbapi.com/?i=tt3896198&apikey=a135fa27"

function App() {
  const searchMovies = async(title) => {
    const response  = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
  }

  useEffect(() => {

  }, []);
  return (

    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
