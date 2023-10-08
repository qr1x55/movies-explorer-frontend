import React from 'react';
import './MoviesCard.css';
import { useState } from 'react';

function MoviesCard({ card, savedPage }) {
  const { nameRU, duration, thumbnail, saved } = card;
  const [isSaved, setIsSaved] = useState(saved);
  
  function handleCardBtnClick() {
    setIsSaved(!isSaved);
  }

  const durationHoursMins = `${Math.floor(duration / 60)}ч ${duration % 60}м`;

  function classCardBtn() {
    if (isSaved && savedPage) {
      return 'movies__card-delete-btn'
    } else if (isSaved && !savedPage) {
      return 'movies__card-like-btn movies__card-like-btn_active'
    } else {
      return 'movies__card-like-btn'
    }
  }

  return (
    <li className='movies__card-item'>
      <div className='movies__card-description'>
        <h2 className='movies__card-title'>{nameRU}</h2>
        <p className='movies__card-duration'>{durationHoursMins}</p>
      </div>
      <a
        className='movies__card-trailer-link link'
        href={card.trailer}
        target='_blank'
        rel='noreferrer'
      >
        <img
          className='movies__card-image'
          alt={nameRU} 
          src={thumbnail}
        />
      </a>
      <button 
      className={classCardBtn()}
      type='button' 
      aria-label={isSaved ? 'Удалить из сохраненных' : 'Сохранить в избранное'}
      onClick={handleCardBtnClick}
      />    
    </li>
  );
}

export default MoviesCard;