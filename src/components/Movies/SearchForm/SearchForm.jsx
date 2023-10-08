import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <form className='search'>
      <fieldset className='search__fieldset'>
        <div className='search__container'>
          <input
            className='search__input'
            type='text'
            placeholder='Фильм'
            required
          />
          <button className='search__button button' type='submit'>Поиск</button>
        </div>
        <div className='search-short'>
          <label className='search__short-switch'>
            <input
              className='search__checkbox'
              type='checkbox'
            />
            <span className='search__slider search__slider_round'></span>
          </label>
          <p className='search__short-text'>Короткометражки</p>
        </div>
      </fieldset>
    </form>
  );
}

export default SearchForm;