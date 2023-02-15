import axios from 'axios';
import {CreditsResponse} from '../interfaces/creditsInterface';
import {MovieData, MoviesResponse} from '../interfaces/movieInterface';

export const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '52ef6b3cc187304760cabeaf5c22660c',
    language: 'es-ES',
  },
});

export const getNowPlaying = () => movieDB.get<MoviesResponse>('/now_playing');
export const getPopular = () => movieDB.get<MoviesResponse>('/popular');
export const getTopRated = () => movieDB.get<MoviesResponse>('/top_rated');
export const getUpcoming = () => movieDB.get<MoviesResponse>('/upcoming');
export const getMovieData = (movieId: number) =>
  movieDB.get<MovieData>(`/${movieId}`);
export const getMovieCredits = (movieId: number) =>
  movieDB.get<CreditsResponse>(`/${movieId}/credits`);
