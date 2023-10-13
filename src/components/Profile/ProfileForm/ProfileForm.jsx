import './ProfileForm.css';
import React, { useContext, useEffect } from 'react';
import {useFormValidator} from '../../../hooks/useFormValidator';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import { EmailRegex } from '../../../utils/constants';
import { ErrorContext } from '../../../contexts/ErrorContext';


function ProfileForm({ onSignOut, onEdit, isSuccess, setIsSuccess}) {
  const currentUser = useContext(CurrentUserContext);
  const isError = useContext(ErrorContext);

  const {values, setValue, errors, isValid, setIsValid, handleChange} = useFormValidator();
  const [isInputActive, setIsInputActive] = React.useState(false);

  useEffect(() => {
    setIsSuccess(false)
  }, [setIsSuccess])

  useEffect(() => {
    if (currentUser) {
      setValue('name', currentUser.name);
      setValue('email', currentUser.email);
    }
  }, [setValue, currentUser]); 

  useEffect(() => {
    if (currentUser.name === values.name && currentUser.email === values.email) {
      setIsValid(false);
    }
  }, [setIsValid, values, currentUser]);

  function handleEditClick() {
    setIsInputActive(true);
  };

  function handleSubmit(e) {
    e.preventDefault();
    onEdit(values.name, values.email)
  };

  function handleCancel() {
    setIsSuccess(false)
    setIsInputActive(false)
  }


  return (
    <section className='profile__container'>
      <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>
      <form className='profile__form' onSubmit={handleSubmit}>
        <label className='profile__label'>Имя
          <input
            value={values.name || ''}
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
            {errors.name ? `${errors.name}`  : ''}
          </span>
        </label>
        <label className='profile__label'>Email
          <input
            value={values.email || ''}
            onChange={handleChange}
            type='email'
            className='profile__input'
            name='email'
            minLength='2'
            maxLength='30'
            pattern={EmailRegex}
            required
            id='email'
            disabled={!isInputActive}
            placeholder="Укажите ваш email"
            title="Укажите ваш email"
          />
          <span id='email-error' className='profile__error'>
            {errors.email ? `${errors.email}` : ''}
          </span>
        </label>
        <div className='profile__message-container'>
          <span className={`profile__message ${isError ? 'profile__message_type_error' : "" } ${isSuccess ?'profile__message_type_success' : ""}`}>{isError ? 'При обновлении профиля произошла ошибка.' : 'Успешно'}</span>
        </div>
        {isInputActive ? (
          <>
            <button
              className={`profile__btn profile__btn_type_submit button`}
              type='submit'
              disabled={!isValid}
            >
              Сохранить
            </button>
            <button
              className={`profile__btn profile__btn_type_cancel button`}
              type='button'
              onClick={handleCancel}
            >
            Отменить редактирование
            </button>
          </>
        ) : (
          <>
            <button
              className={`profile__btn profile__btn_type_edit button`}
              type='button'
              onClick={handleEditClick}
            >
              Редактировать
            </button>
            <button
              className='profile__btn profile__btn_type_logout button'
              type='button'
              onClick={onSignOut}
            >
              Выйти из аккаунта
            </button>
          </>
        )}             
      </form>
    </section> 
  );
};
  
export default ProfileForm;