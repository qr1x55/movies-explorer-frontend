import React from 'react';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm.jsx';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


function Movies() {
  return (
    <>
      <Header loggedIn={true}/>
      <main className='movies'>
        <section className='movies__cards'>
          <SearchForm/>
          <MoviesCardList/>
          <button className='movies__more-btn button' type='button' aria-label='Показать еще'>Ещё</button>
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default Movies;