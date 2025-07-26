import { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import Pesquisar from './Components/Pesquisar'
import Card from './Components/Card'
import { useDebounce } from 'react-use'
import { getTrendingMoviesList, movieService } from '../services/movieService'

const API_KEY = import.meta.env.VITE_API_KEY;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    }
  };

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [trendingMovies, setTrendingMovies] = useState('');

  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm] )
  

  const getMovies = async (query = '') => {
  try {
    const url = query 
    ? `https://api.themoviedb.org/3/search/movie?query=${query}`
    :'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const response = await fetch(url, options);
    const data = await response.json();
    
    setMovieList(data.results || []);

    if(query && data.results.length > 0){
      await movieService(query, data.results[0]);
      console.log(data.results[0]);
    }

  } catch (error) {
    console.log("Error fetching movie list api: ", error);
  }
}

const getTrendingMovies = async () => {
  try {
    const response = await getTrendingMoviesList();
    if(response.success){
      setTrendingMovies(response.data);
    } else {
      console.log("Failed to get trending movies");
    }
  } catch (error) {
    console.log("Error getting trending movies: ", error);
  }
}

useEffect(() => {
  getTrendingMovies();
}, []);

useEffect(() => {
  getMovies(debouncedSearchTerm);
}, [debouncedSearchTerm])

  return(
    <main>
      <div className='backgroundLayer'/>
      <div className='wrapper'>
        <header>
          <img src='/hero.png'/>
          <h1>Encontre <span className='text-gradient'>Filmes</span> para maratonar</h1>
          <Pesquisar searchTerm={searchTerm} setSearchTerm = {setSearchTerm} />
        </header>

        {trendingMovies.length > 0 && (
          <section className='emAlta'>
          <h2>Trending</h2>
          <ul>
            {trendingMovies.map((movie, index) => (
              <li key={movie.searchTerm}>
              <p>{index + 1}</p>
              <img src={movie.poster_url}></img>
            </li>
            ))}
          </ul>
        </section>
        )}

        <section className='todosFilmes'>
          <h2>Todos os Filmes</h2>
          <ul>
            {movieList.map((movie)=>(
            <Card key={movie.id} movie = {movie} />
          ))}
          </ul>
          
        </section>
      </div>
    </main>
  )
}

export default App
