import React, { useEffect, useState } from 'react';
import Card from './Card';
import useFetchMovies from '../customeHooks/useFetchMovies';
import SkeletonCard from './SkeletonCard';


function Upcoming({ search_item }) {
  const [loading,setLoading] = useState(true);
  const upcoming = useFetchMovies("upcoming",setLoading);
  const searchedCards = upcoming.filter(movie => movie.title.toLowerCase().includes(search_item.toLowerCase()));

  return (
    <>
     {loading ? (
        Array.from({ length: 10 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))
      ) : (
        searchedCards.map((movie) => (
          <Card
            key={movie.id}
            name={movie.title}
            overview={movie.overview}
            img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            releaseDate={movie.release_date}
            voteAverage={movie.vote_average}
          />
        ))
      )}


    </>
  );
}

export default Upcoming;
