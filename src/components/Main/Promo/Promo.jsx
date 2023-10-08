import React from 'react';
import './Promo.css';
import WebPlanet from '../../../images/promo-logo.svg';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <div className='promo__container-text'>
          <h1 className='promo__title'>
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className='promo__caption'>
            Листайте ниже, чтобы узнать больше про&nbsp;этот проект и его создателя.
          </p>
          <a href='#about' className='promo__button button' type='button'>Узнать больше</a>
        </div>
        <img
          className='promo__img'
          src={WebPlanet}
          alt='Веб земной шар'
        />
      </div>
    </section>
  );
}

export default Promo;