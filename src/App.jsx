 import { useState } from "react"
 import { useEffect } from "react"
 import MovieCard from "./MovieCard"
 import './App.css'
 import Search from './search.svg'


 // key 7c94f3b 
 //http://www.omdbapi.com/?i=tt3896198&apikey=7c94f3b
 const API_URL = 'http://www.omdbapi.com?apikey=7c94f3b'

 const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
  
    useEffect(() =>{
        searchMovies('Batman')
     }, [])

    // code to serach for a movie
    // the async title means that we will saerch
    // by thee title of a movie
    const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`)

    // the below key will help us to get the data
    const data = await response.json()
    // testing to see the api works
    setMovies(data.Search)
    }

    return (
      <div className="app">
          <h1>Home Of Movies</h1>
             
           
           <div className="search">
               <input 
               value={searchTerm}
               onChange={(e) =>setSearchTerm(e.target.value)}
               placeholder="Search for movies here" 
               />
               <img src={Search} 
               alt="search" 
               onClick={() =>searchMovies(searchTerm)}
               />    
           </div>

           {movies?.length > 0 ? (
            <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};
  export default App