import React from 'react';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm.jsx';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';


function Movies() {
  return (
    <main className='movies'>
      <Navigation loggedIn={true}/>
      <SearchForm/>
      <section className='movies__cards_container'>
        <MoviesCardList/>
        <button className='movies__more-btn'>Ещё</button>
      </section>
      <Footer/>
    </main>
  );
}

export default Movies;