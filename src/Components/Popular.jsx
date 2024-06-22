import React, { useState } from 'react';
import Card from './Card';
import useFetchMovies from '../customeHooks/useFetchMovies';
import SkeletonCard from './SkeletonCard';
import Modal from './Modal';
import useFetchTrailer from '../customeHooks/useFetchTrailer';

function Popular({ search_item }) {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovieID, setSelectedMovieID] = useState(null);
  const popular = useFetchMovies("popular", setLoading);
  const videoKey = useFetchTrailer(selectedMovieID);

  const handleCardClick = (movieId) => {
    setSelectedMovieID(movieId);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMovieID(null);
  };

  const filteredMovies = popular.filter(movie =>
    movie.title.toLowerCase().includes(search_item.toLowerCase())
  );

  return (
    <>
      {loading ? (
        Array.from({ length: 10 }).map((_, index) => <SkeletonCard key={index} />)
      ) : (
        filteredMovies.map(movie => (
          <Card
            key={movie.id}
            name={movie.title}
            overview={movie.overview}
            img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            releaseDate={movie.release_date}
            voteAverage={movie.vote_average}
            onClick={() => handleCardClick(movie.id)}
          />
        ))
      )}
      <Modal show={showModal} onClose={handleCloseModal} videoKey={videoKey} />
    </>
  );
}

export default Popular;
