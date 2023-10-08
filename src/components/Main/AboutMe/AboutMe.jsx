import React from 'react';
import './AboutMe.css';
import StudentPhoto from '../../../images/student-photo.png';

function AboutMe() {
  return (
    <section className='student'>
      <h2 className='student__title section-title'>Студент</h2>
      <div className='student__info'>
        <div className='student__container'>
          <h3 className='student__name'>Виталий</h3>
          <h4 className='student__job'>Фронтенд-разработчик, 30 лет</h4>
          <p className='student__bio'>
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className='student__github link'
            href='https://github.com/qr1x55'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </div>
        <img
          className='student__photo'
          src={StudentPhoto}
          alt='Фото студента'
        />
      </div>
    </section>
  );
}

export default AboutMe;