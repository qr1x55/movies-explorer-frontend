import React from 'react';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Header from '../Header/Header';
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
    <>
      <Header loggedIn={true}/>
      <main className='movies'>
        <SearchForm/>
        <section className='movies__cards'>
          <MoviesCardList 
          savedPage={true} 
          movies={savedMovies} 
          onDelete={handleDeleteMovie} 
          />
        </section>
      </main>
      <Footer/>
    </>
  );
}