import { useState, useEffect } from 'react';

const apiKey = 'a8d22016f84542b58963902b8d436266';

function useFetchTrailer(movieID) {
    const [videoKey, setVideoKey] = useState(null);
    const url = `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${apiKey}`;

    useEffect(() => {
        if (movieID) {
            const storedTrailer = sessionStorage.getItem(`trailer_${movieID}`);
            if (storedTrailer) {
                setVideoKey(storedTrailer);
            } else {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        const trailer = data.results.find(video => video.type === 'Trailer');
                        const key = trailer ? trailer.key : null;
                        setVideoKey(key);
                        if (key) {
                            sessionStorage.setItem(`trailer_${movieID}`, key);
                        }
                    })
                    .catch(error => console.error('Error fetching trailer:', error));
            }
        }
    }, [movieID, url]);

    return videoKey;
}

export default useFetchTrailer;
