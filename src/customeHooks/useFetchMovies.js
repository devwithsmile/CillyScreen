import { useState, useEffect } from 'react';
const apiKey = 'a8d22016f84542b58963902b8d436266';

function useFetchMovies(url_parameter, setLoading) {

  const [movies, setMovies] = useState([]);
  const url = `https://api.themoviedb.org/3/movie/${url_parameter}?api_key=${apiKey}`;

  useEffect(() => {
    setLoading(true);
    const storedMovies = sessionStorage.getItem(url_parameter);
    if (storedMovies !== null) {
      setMovies(JSON.parse(storedMovies));
      setTimeout(() => {
        setLoading(false);
      }, 1000); // Simulate loading delay
    } else {
      fetch(url)
        .then(response => response.json())
        .then(json => {
          setMovies(json.results);
          sessionStorage.setItem(url_parameter, JSON.stringify(json.results));
          setTimeout(() => {
            setLoading(false);
          }, 1000); // Simulate loading delay
        })
        .catch(error => {
          console.error(error);
          setLoading(false); // Make sure to set loading to false on error as well
        });
    }
  }, [url, url_parameter, setLoading]);

  return movies;
}

export default useFetchMovies;
