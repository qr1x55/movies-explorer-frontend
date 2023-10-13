import React, { useEffect } from 'react';
import './MoviesCard.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({ addMovie, onDelete, data, savedMovies }) {
  const { pathname } = useLocation()
  const [click, setClick] = useState(false)
  
  useEffect(() => {
    if (pathname === '/movies')
      setClick(savedMovies.some(movie => data.id === movie.movieId))
  }, [savedMovies, data.id, setClick, pathname]) 

  function onClick() {
    if (savedMovies.some(movie => data.id === movie.movieId)) {
      setClick(true)
      addMovie(data)
    } else {
      setClick(false)
      addMovie(data)
    }
  }

   function convertDuration(duration) {
    return `${Math.floor(duration / 60)}ч ${duration % 60}м`
   }

  return (
    <li className='movies__card-item'>
      <div className='movies__card-description'>
        <h2 className='movies__card-title'>{data.nameRU}</h2>
        <p className='movies__card-duration'>{convertDuration(data.duration)}</p>
      </div>
      <a
        className='movies__card-trailer-link link'
        href={data.trailerLink}
        target='_blank'
        rel='noreferrer'
      >
        <img
          className='movies__card-image'
          alt={data.nameRU} 
          src={pathname === '/movies' ? `https://api.nomoreparties.co${data.image.url}` : data.image}
        />
      </a>
      {pathname === '/movies'?
      <button 
      className={`movies__card-like-btn ${click ? 'movies__card-like-btn_active': null} button`}
      type='button' 
      aria-label={click ? 'Удалить из сохраненных' : 'Сохранить в избранное'}
      onClick={onClick}
      />   
      :
      <button 
      className='movies__card-delete-btn button'
      type='button' 
      aria-label={click ? 'Удалить из сохраненных' : 'Сохранить в избранное'}
      onClick={() => onDelete(data._id)}
      />   
      }
    </li>
  );
}

export default MoviesCard;