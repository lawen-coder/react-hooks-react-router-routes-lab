import React from "react";
import { movies } from "../data";
const Movie = movies.map(movie => (
  <div key ={movie.title}> {movie.title}
  {movie.time}
  <ul key={movie.title}> {movie.genres.map(genre => <li key={genre}>{genre}</li>)}</ul>
  </div>
))


function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {Movie}
  </div>;
}

export default Movies;
