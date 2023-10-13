import React, { useContext, useEffect } from 'react';
import './SearchForm.css';
import { ErrorContext } from '../../contexts/ErrorContext';
import { useFormValidator } from '../../hooks/useFormValidator';
import { useLocation } from 'react-router-dom';

function SearchForm({ isShort, searchMovies, searchedMovie, toggleShort, setIsError, firstRender, savedMovies}) {
  const isError = useContext(ErrorContext);
  const { pathname } = useLocation();
  const { values, handleChange, reset } = useFormValidator();
  

  useEffect(() => {
    if ((pathname === '/saved-movies' && savedMovies.length === 0)) {
      reset({ search: '' })
    } else {
      reset({ search: searchedMovie })
    }  
    setIsError(false)
  }, [searchedMovie, reset, setIsError, pathname, savedMovies])

  function onSubmit(e) {
    e.preventDefault()
    if (e.target.search.value) {
      searchMovies(e.target.search.value)
      setIsError(false)
    } else {
      setIsError(true)
    }
  }

  return (
    <form noValidate className='search' name={'SearchForm'} onSubmit={onSubmit}>
      <fieldset className='search__fieldset'>
        <div className='search__container'>
          <input
            className='search__input'
            name='search'
            type='text'
            placeholder='Фильм'
            required
            value={values.search || ''}
            onChange={(e) => {
              handleChange(e)
              setIsError(false)
            }}
            disabled={savedMovies ? (savedMovies.length === 0 && true) : false}
          />
          <button className='search__button button' type='submit'>Поиск</button>
          <span className='search__error'>{isError ? `Введите название фильма` : ''}</span>
        </div>
        <div className='search-short'>
          <label className='search__short-switch button'>
            <input
              className='search__checkbox'
              type='checkbox'
              name='short-switch'
              checked={isShort}
              onChange={() => toggleShort()}
              disabled={firstRender}
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