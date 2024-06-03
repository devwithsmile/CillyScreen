import React, { useEffect, useState } from 'react'
import Card from './Card';
import useFetchMovies from '../customeHooks/useFetchMovies';

function Popular({ search_item }) {

  const popular = useFetchMovies("popular");
  const searchedCards = popular.filter(movie => movie.title.toLowerCase().includes(search_item.toLowerCase()));
  return (
    <>
      {searchedCards.map((movie) => (
        <Card
          key={movie.id}
          name={movie.title}
          overview={movie.overview}
          img={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          releaseDate={movie.release_date}
          voteAverage={movie.vote_average}
        />
      ))}
    </>

  )
}

export default Popular