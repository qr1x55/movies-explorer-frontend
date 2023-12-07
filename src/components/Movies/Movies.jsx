import React, { useCallback, useEffect, useState } from 'react';
import './Movies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm.jsx'
import { getMovies } from '../../utils/MoviesApi';


function Movies({ addMovie, setIsError, savedMovies }) {
  const [allMovies, setAllMovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])
  const [searchedMovie, setSearchedMovie] = useState('')
  const [isShort, setIsShort] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [serverError, setServerError] = useState(false)
  const [firstRender, setFirstRender] = useState(true)

  const filterMovies = useCallback((search, isShort, movies) => {
    localStorage.setItem('movie', JSON.stringify(search))
    localStorage.setItem('shorts', JSON.stringify(isShort))
    localStorage.setItem('allmovies', JSON.stringify(movies))
    setSearchedMovie(search)
    setFilteredMovies(movies.filter((movie) => {
      const searchName = movie.nameRU.toLowerCase().includes(search.toLowerCase())
      return isShort ? (searchName && movie.duration <= 40) : searchName
    }))
  }, [])

  function searchMovies(search) {
    if (allMovies.length === 0) {
      setIsLoading(true)
      getMovies()
        .then((res) => {
          setAllMovies(res)
          setIsShort(false)
          setServerError(false)
          setFirstRender(false)
          filterMovies(search, isShort, res)
        })
        .catch(err => {
          setServerError(true)
          console.error(`Ошибка при поиске фильмов ${err}`)
        })
        .finally(() => setIsLoading(false))
    } else {
      filterMovies(search, isShort, allMovies)
    }
  }

  useEffect(() => {
    if (localStorage.allmovies && localStorage.shorts && localStorage.movie) {
      const movies = JSON.parse(localStorage.allmovies)
      const search = JSON.parse(localStorage.movie)
      const isShort = JSON.parse(localStorage.shorts)
      setServerError(false)
      setFirstRender(false)
      setSearchedMovie(search)
      setIsShort(isShort)
      setAllMovies(movies)
      filterMovies(search, isShort, movies)
    }
  }, [filterMovies])

  function toggleShort() {
    if (isShort) {
      setIsShort(false)
      filterMovies(searchedMovie, false, allMovies)
    } else {
      setIsShort(true)
      filterMovies(searchedMovie, true, allMovies)
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
          />
          <MoviesCardList
            movies={filteredMovies}
            savedMovies={savedMovies}
            addMovie={addMovie}
            isLoading={isLoading}
            serverError={serverError}
            firstRender={firstRender}
          />
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default Movies;