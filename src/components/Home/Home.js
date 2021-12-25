import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import movieApi from '../../common/apis/MovieApi';
import { APIKey } from '../../common/apis/MovieApiKey';

const Home = () => {
  useEffect(() => {
    const movieText = 'Harry';
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log('Error', err);
        });
      console.log('The Response from API: ', response);
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing />
    </div>
  );
};

export default Home;
