import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='portfolio__container'>
        <h4 className='portfolio__title'>Портфолио</h4>
        <nav className='portfolio__navigation'>
          <ul className='portfolio__list'>
            <li className='portfolio__item'>
              <a
                className='portfolio__link link'
                href='https://qr1x55.github.io/russian-travel/index.html#'
                target='_blank' rel="noreferrer"
              >
                <p className='portfolio__text'>
                  Статичный сайт
                </p>
                <p className='portfolio__arrow'>↗</p>
              </a>
            </li>
            <li className='portfolio__item'>
              <a
                className='portfolio__link link'
                href='https://qr1x55.github.io/russian-travel/index.html#'
                target='_blank' rel="noreferrer"
              >
                <p className='portfolio__text'>
                  Адаптивный сайт
                </p>
                <p className='portfolio__arrow'>↗</p>
              </a>
            </li>
            <li className='portfolio__item'>
              <a
                className='portfolio__link link'
                href='https://qr1x55.github.io/russian-travel/index.html#'
                target='_blank' rel="noreferrer"
              >
                <p className='portfolio__text'>
                  Одностраничное приложение
                </p>
                <p className='portfolio__arrow'>↗</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Portfolio;