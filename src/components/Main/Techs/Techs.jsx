import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className='techs'>
      <h2 className='techs__title section-title'>Технологии</h2>
        <h3 className='techs__description_title'>7 технологий</h3>
        <p className='techs__description_text'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      <ul className='techs__stack'>
        <li className='techs__stack_item'>HTML</li>
        <li className='techs__stack_item'>CSS</li>
        <li className='techs__stack_item'>JS</li>
        <li className='techs__stack_item'>React</li>
        <li className='techs__stack_item'>Git</li>
        <li className='techs__stack_item'>Express.js</li>
        <li className='techs__stack_item'>mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;