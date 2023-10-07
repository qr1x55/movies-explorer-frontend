import React from 'react';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';
import { useState } from 'react';
import Footer from '../Footer/Footer';
import './SavedMovies.css';

export default function SavedMovies() {
  const [savedMovies, setSavedMovies] = useState([]);

  function handleDeleteMovie(movie) {
    const newSavedMovies = savedMovies.filter((item) => item.movieId !== movie.movieId);
    setSavedMovies(newSavedMovies);
  }

  return (
    <main className='saved-movies'>
      <Navigation loggedIn={true}/>
      <SearchForm/>
      <section className='saved-movies__cards_container'>
        <MoviesCardList 
        savedPage={true} 
        movies={savedMovies} 
        onDelete={handleDeleteMovie} 
        />
      </section>
      <Footer/>
    </main>
  );
}