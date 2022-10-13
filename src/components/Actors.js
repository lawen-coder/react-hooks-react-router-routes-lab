import React from "react";
import { actors } from "../data";
const Actor = actors.map(actor => (
  <div key={actor.name}> {actor.name}
  <ul key={actor.name}>{actor.movies.map(movie => (
    <li key={movie}>{movie} </li>
  ))} </ul>
  </div>
))
function Actors() { 
  return <div>
<h1>Actors Page</h1>
{Actor}
  </div>;
}

export default Actors;
