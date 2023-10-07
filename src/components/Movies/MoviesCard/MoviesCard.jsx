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
      return 'movies__cards_delete-btn'
    } else if (isSaved && !savedPage) {
      return 'movies__cards_like-btn movies__cards_like-btn_active'
    } else {
      return 'movies__cards_like-btn'
    }
  }

  return (
    <li className='movies__card_item'>
      <div className='movies__card_description'>
        <h3 className='movies__card_title'>{nameRU}</h3>
        <p className='movies__cards_duration'>{durationHoursMins}</p>
      </div>
      <a
        className='movies__card_trailer-link link'
        href={card.trailer}
        target='_blank'
        rel='noreferrer'
      >
        <img
          className='movies__card_image'
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