import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { movies } from '../../../utils/constants';

function MoviesCardList({ savedPage, onDelete }) {
  const moviesFilter = savedPage ? movies.filter((movie) => movie.saved) : movies;

  const cards = moviesFilter.map((movie) => (
    <MoviesCard
      key={movie.movieId}
      card={movie}
      onDelete={onDelete}
      savedPage={savedPage}
    />
  ));

  return (
    <section className='movies__cards'>
      <ul className='movies__cards_list'>
        {cards}
      </ul>
    </section>
  );
}

export default MoviesCardList;