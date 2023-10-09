import React from 'react';
import './Footer.css'

function Footer({ isMain }) {
  return (
    <footer className={`footer ${isMain ? 'footer_type_main' : ""}`}>
      <p className='footer__info'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className={`footer__bottom`}>
        <p className="footer__copyright">&copy; 2023</p>
        <div className='footer__link-container'>
          <a href='https://practicum.yandex.ru/' target='_blank' rel="noreferrer" className='footer__link link'>Яндекс.Практикум</a>
          <a href='https://github.com/qr1x55' target='_blank' rel="noreferrer" className='footer__link link'>Github</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;