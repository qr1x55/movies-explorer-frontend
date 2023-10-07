import './ProfileForm.css';
import React from 'react';
import {useFormValidator} from '../../../hooks/useFormValidator';
import Tooltip from '../../Tooltip/Tooltip';


function ProfileForm({ onSignOut, tooltip }) {

  const {values, errors, isValid, handleChange} = useFormValidator();
  const [isInputActive, setIsInputActive] = React.useState(false);

  function handleSubmit(e) {
   console.log('Сохранены изменения')
  };

  // обработчик для разблокирования полей ввода
  function handleEditClick() {
    setIsInputActive(true);
  };

  // ---РАЗМЕТКА JSX---
  return (
    <div className='profile'>
      <div className='profile__container'>
        <h2 className='profile__title'>{`Привет, Виталий!`}</h2>
        <form className='profile__form' onSubmit={handleSubmit}>
          <label className='profile__label'>Имя
            <input
              value={values.name || 'Виталий'}
              onChange={handleChange}
              type='text'
              className='profile__input'
              name='name'
              minLength='2'
              maxLength='30'
              required
              id='name'
              disabled={!isInputActive}
              placeholder="Введите имя"
              title="Введите имя"
            />
            <span id="name-error" className='profile__error'>
              {errors.name ? `Что-то пошло не так...` : ''}
            </span>
          </label>
          <label className='profile__label'>Email
            <input
              value={values.email || 'pochta@yandex.ru'}
              onChange={handleChange}
              type='email'
              className='profile__input'
              name='email'
              minLength='2'
              maxLength='30'
              required
              id='email'
              disabled={!isInputActive}
              placeholder="Укажите ваш email"
              title="Укажите ваш email"
            />
            <span id='email-error' className='profile__error'>
              {errors.email ? `Что-то пошло не так...` : ''}
            </span>
          </label>

          <Tooltip {...tooltip} />
          
          {isInputActive ? (
            <button
              className={`profile__btn profile__btn_submit link`}
              type='submit'
              disabled={!isValid }
            >
              Сохранить
            </button>
          ) : (
            <>
            <button
              className={`profile__btn profile__btn_edit link`}
              type='button'
              onClick={handleEditClick}
            >
              Редактировать
            </button>
            <button
              className='profile__btn profile__btn_logout link'
              type='button'
              onClick={onSignOut}
            >
              Выйти из аккаунта
            </button>
            </>
          )}             
        </form>
      </div> 
    </div>
  );
};
  
export default ProfileForm;