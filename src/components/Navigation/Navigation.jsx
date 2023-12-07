import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../Logo/Logo';


function Navigation({ loggedIn }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleMenuOpen() {
    setIsClicked(true)
  };

  function handleMenuClose() {
    setIsClicked(false)
  };

  return (
    <div className='menu-container'>
      <Logo />
      <nav className={`menu ${isClicked ? 'menu_open' : ''}`}>

        {loggedIn ? (
          <>
            <button
              className={`menu__btn ${isClicked ? 'menu__btn_close' : 'menu__btn_burger'} button`}
              onClick={isClicked ? handleMenuClose : handleMenuOpen}
              type='button'
            />
            <div className={`menu__cover ${isClicked ? 'menu__cover_active' : ''}`}>  </div>
            <div className={`menu__box ${isClicked ? 'menu__box_open' : ''}`}>
              <NavLink to='/' className='menu__film-link link' onClick={handleMenuClose}>
                Главная
              </NavLink>
              <NavLink to='/movies'  className='menu__film-link link' onClick={handleMenuClose}>
                Фильмы
              </NavLink>
              <NavLink to='/saved-movies'  className='menu__film-link link' onClick={handleMenuClose}>
                Сохраненные фильмы
              </NavLink>
              <Link to='/profile' className='menu__link menu__link_type_profile_active link' onClick={handleMenuClose}>
                Аккаунт
              </Link>
            </div>

            <Link to='/profile' className='menu__link menu__link_type_profile link'
              onClick={handleMenuClose}>
              Аккаунт
            </Link>
          </>
        ) : (
          <>
            <div className='menu__links'>
              <Link to='/signup' className='menu__link link'>Регистрация</Link>
              <Link to='/signin' className='menu__link menu__link_type_signin link'>Войти</Link>
            </div>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navigation;