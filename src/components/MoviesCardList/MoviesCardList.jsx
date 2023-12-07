import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import { 
  MAX_SCREEN,
  MEDIUM_SCREEN, 
  SMALL_SCREEN,
  COUNT_ABOVE_MAX, 
  COUNT_LESS_MAX,
  COUNT_MEDIUM,
  COUNT_SMALL,
  STEP_MAX,
  STEP_MEDIUM,
  STEP_SMALL
 } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';
import MoviesCard from './MoviesCard/MoviesCard';

function MoviesCardList({ movies, addMovie, onDelete, savedMovies, isLoading, serverError, firstRender }) {
  const {pathname} = useLocation();
  const [count, setCount] = useState('')
  const fact = movies.slice(0, count)

  function renderMovies() {
    const counter = { init: COUNT_ABOVE_MAX, step: STEP_MAX }
    if (window.innerWidth < MAX_SCREEN) {
      counter.init = COUNT_LESS_MAX
      counter.step = STEP_MEDIUM
    }
    if (window.innerWidth < MEDIUM_SCREEN) {
      counter.init = COUNT_MEDIUM
      counter.step = STEP_SMALL
    }
    if (window.innerWidth < SMALL_SCREEN) {
      counter.init = COUNT_SMALL
      counter.step = STEP_SMALL
    }
    return counter
  }

  useEffect(() => {
    if (pathname === '/movies') {
      setCount(renderMovies().init)
      function renderForScreen() {
        if (window.innerWidth >= MAX_SCREEN) {
          setCount(renderMovies().init)
        }
        if (window.innerWidth < MAX_SCREEN) {
          setCount(renderMovies().init)
        }
        if (window.innerWidth < MEDIUM_SCREEN) {
          setCount(renderMovies().init)
        }
        if (window.innerWidth < SMALL_SCREEN) {
          setCount(renderMovies().init)
        }
      }
      window.addEventListener('resize', renderForScreen)
      return () => window.removeEventListener('resize', renderForScreen)
    }
  }, [pathname])


  function renderMore() {
    setCount(count + renderMovies().step)
  }

  return (
    <div className='movies__cards-container'>
      <ul className='movies__cards-list'>
        {isLoading ? <Preloader/> : 
        (pathname === '/movies' && fact.length !== 0) ? 
        fact.map(data => {
          return (
            <MoviesCard
              key={data.id}
              addMovie={addMovie}
              savedMovies={savedMovies}
              data={data}
              />
          )
        }) : movies.length !== 0 ?
        movies.map(data => {
          return (
            <MoviesCard
              key={data._id}
              onDelete={onDelete}
              data={data}
              />
          )
        }) : serverError ? 
        <span className='movies__error'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.</span>
        : !firstRender ? 
        <span className='movies__error'>Ничего не найдено</span>
        : pathname === '/movies' ?
        <span className='movies__error'>Начните поиск</span>
        : <span className='movies__error'>Нет сохраненных фильмов</span>
        }
      </ul>
      {pathname === '/movies' && <button onClick={renderMore} className={`movies__more-btn ${count >= movies.length ? 'movies__more-btn_hidden' : ''} button`} type='button' aria-label='Показать еще'>Ещё</button>}
    </div>
  );
}

export default MoviesCardList;