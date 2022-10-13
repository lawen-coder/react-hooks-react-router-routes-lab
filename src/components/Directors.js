import React from "react";
import { directors } from "../data";

const Director = directors.map(director => (
  <div key={director.name}>{director.name}
  <ul key= {director.name}> {director.movies.map(movie =>(
    <li key={movie}>{movie}</li>
  ))} </ul>
  </div>
))

function Directors() {
  return <div>
<h1> Directors Page</h1>
{Director}

  </div>;
}

export default Directors;
