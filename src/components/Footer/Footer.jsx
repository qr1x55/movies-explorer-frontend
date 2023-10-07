import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p className='footer__info'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className={`footer__bottom`}>
        <p className="footer__copyright">&copy; 2023</p>
        <div className='footer__link-container'>
          <a href='https://www.google.ru/' className='footer__link'>Яндекс.Практикум</a>
          <a href='https://www.google.ru/' className='footer__link'>Github</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;