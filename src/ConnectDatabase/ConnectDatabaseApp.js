import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './ConnectDatabaseApp.css';

function ConnectDatabaseApp() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films/');
      //No need to do this when using axios
      if (!response.ok) {
        throw new Error('Something went wrong!');
      };

      const data = await response.json();

      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        };
      })
      setMovies(transformedMovies);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    };
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);
  //if [] the data is fetched immediately because of useEffect, we don't have to press the button

  let content = <p>Found no movies.</p>
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />
  };
  if (error) {
    content = <p>{error}</p>
  };
  if (isLoading) {
    content = <p>Loading...</p>
  };



  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default ConnectDatabaseApp;