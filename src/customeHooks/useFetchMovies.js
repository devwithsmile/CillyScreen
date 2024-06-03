import { useState, useEffect } from 'react';

function useFetchMovies(url_parameter) {
  const [movies, setMovies] = useState([]);
  const apiKey = 'a8d22016f84542b58963902b8d436266';
  const url = `https://api.themoviedb.org/3/movie/${url_parameter}?api_key=${apiKey}`;
 
  useEffect(() => {
    const storedMovies = localStorage.getItem(url_parameter);
    if (storedMovies != undefined) {
      setMovies(JSON.parse(storedMovies));
    } else {
      fetch(url)
        .then(response => response.json())
        .then(json => {
          setMovies(json.results);
          localStorage.setItem(url_parameter, JSON.stringify(json.results));
          console.log("useEffect " + url_parameter);
        })
        .catch(error => console.error(error));
    }
  }, [url, url_parameter]);

  return movies;
}

export default useFetchMovies;
