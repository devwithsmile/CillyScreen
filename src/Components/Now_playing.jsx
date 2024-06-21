import React, { useState } from 'react';
import Card from './Card';
import useFetchMovies from '../customeHooks/useFetchMovies';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import SkeletonCard from './SkeletonCard';

function NowPlaying({ search_item }) {
  const [loading, setLoading] = useState(true);
  const nowPlaying = useFetchMovies("now_playing", setLoading);
  const searchedCards = nowPlaying.filter(movie => movie.title.toLowerCase().includes(search_item.toLowerCase()));

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

export default NowPlaying;
