import React from "react";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=3db0d849';

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        searchMovies('titanic');
    },[]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    
    //const movie1 = movies[0];
    //console.log(movies[0]);
    return(
        <div className="app">
            <h1>MoiveLand</h1> 
            <div className="search">
                <input 
                placeholder="Search for Movies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                src={SearchIcon} 
                alt="SearchIcon"
                onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
                ? (
                    <div className="container">
                        {
                            movies.map((movie)=>(
                                <MovieCard movie={movie}/>
                            ))
                        }
                    </div>
                ):(
                    <div className="empty">
                        <h2>No movies FOund</h2>
                    </div>
                )
            }

            
        </div>
    );
}

export default App