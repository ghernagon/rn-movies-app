import {useEffect, useState} from 'react';
import {
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming,
} from '../api/movieDB';
import {Movie} from '../interfaces/movieInterface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    const nowPlayingPromise = getNowPlaying();
    const popularPromise = getPopular();
    const topRatedPromise = getTopRated();
    const upcomingPromise = getUpcoming();

    const resp = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);

    setMoviesState({
      nowPlaying: resp[0].data.results,
      popular: resp[1].data.results,
      topRated: resp[2].data.results,
      upcoming: resp[3].data.results,
    });

    setIsLoading(false);

    // .then(response => {
    //   setPopular(response.data.results);
    //   setIsLoading(false);
    // })
    // .catch(err => console.log('ERROR AXIOS: ', err));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};
