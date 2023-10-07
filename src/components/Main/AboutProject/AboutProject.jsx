import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about' id='about'>
      <h2 className='about__title section-title'>О проекте</h2>
      <div className='about__description'>
        <h3 className='about__stages-title'>
          Дипломный проект включал 5 этапов
        </h3>
        <h3 className='about__weeks-title'>
          На выполнение диплома ушло 5 недель
        </h3>
        <p className='about__stages-text'>
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <p className='about__weeks-text'>
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className='about__timeline'>
        <div className='about__timeline_backend-weeks'>1 неделя</div>
        <div className='about__timeline_frontend-weeks'>4 недели</div>
        <div className='about__timeline_backend'>Back-end</div>
        <div className='about__timeline_frontend'>Front-end</div>
      </div>
    </section>
  );
}

export default AboutProject;