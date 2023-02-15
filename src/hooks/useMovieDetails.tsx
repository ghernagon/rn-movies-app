import {useEffect, useState} from 'react';
import {getMovieCredits, getMovieData} from '../api/movieDB';
import {Cast} from '../interfaces/creditsInterface';
import {MovieData} from '../interfaces/movieInterface';

interface MovieDetails {
  isLoading: boolean;
  cast: Cast[];
  movieData?: MovieData;
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieData: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = await getMovieData(movieId);
    const movieCastPromise = await getMovieCredits(movieId);

    const [movieDetailsResponse, movieCastPromiseResponse] = await Promise.all([
      movieDetailsPromise,
      movieCastPromise,
    ]);

    setState({
      isLoading: false,
      movieData: movieDetailsResponse.data,
      cast: movieCastPromiseResponse.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...state,
  };
};
