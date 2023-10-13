import React, { useCallback, useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm.jsx'
import './SavedMovies.css';

export default function SavedMovies({ setIsError, savedMovies, onDelete }) {
  const [filteredMovies, setFilteredMovies] = useState(savedMovies)
  const [searchedMovie, setSearchedMovie] = useState('')
  const [isShort, setIsShort] = useState(false)
  const [firstRender, setFirstRender] = useState(true)

  const filterMovies = useCallback((search, isShort, movies) => {
    setSearchedMovie(search)
    setFilteredMovies(movies.filter((movie) => {
      const searchName = movie.nameRU.toLowerCase().includes(search.toLowerCase())
      return isShort ? (searchName && movie.duration <= 40) : searchName
    }))
  }, [])

  function searchMovies(search) {
    setFirstRender(false)
    filterMovies(search, isShort, savedMovies)
  }

  useEffect(() => {
    if (savedMovies.length === 0) {
      setFirstRender(true)
    } else {
      setFirstRender(false)
    }
    filterMovies(searchedMovie, isShort, savedMovies)
  }, [filterMovies, savedMovies, searchedMovie, isShort])

  function toggleShort() {
    if (isShort) {
      setIsShort(false)
      setFirstRender(false)
      filterMovies(searchedMovie, false, savedMovies)
    } else {
      setIsShort(true)
      setFirstRender(false)
      filterMovies(searchedMovie, true, savedMovies)
    }
  }

  return (
    <>
      <Header loggedIn={true}/>
      <main className='movies'>
        <section className='movies__cards'>
          <SearchForm
            isShort={isShort}
            searchMovies={searchMovies}
            searchedMovie={searchedMovie}
            toggleShort={toggleShort}
            setIsError={setIsError}
            firstRender={firstRender}
            savedMovies={savedMovies}
          />
          <MoviesCardList 
            movies={filteredMovies}
            onDelete={onDelete}
            firstRender={firstRender}
          />
        </section>
      </main>
      <Footer/>
    </>
  );
}