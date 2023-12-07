import './SignForm.css';
import Logo from '../Logo/Logo';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFormValidator } from '../../hooks/useFormValidator';
import { EMAIL_REGEX } from '../../utils/constants';
import { ErrorContext } from '../../contexts/ErrorContext';
import { SendContext } from '../../contexts/SendContext';

function SignForm({
    type,
    linkTo,
    title,
    btnName,
    linkName,
    subtitle,
    onSubmit,
    setIsError
}) {
    const { values, errors, isValid, handleChange } = useFormValidator();
    const isError = useContext(ErrorContext);
    const isSend = useContext(SendContext);

    useEffect(() => {
      setIsError(false)
    }, [setIsError])

    function handleSubmit(e) {
        e.preventDefault();
        if (type === 'signup') {
          onSubmit(values.username, values.email, values.password)
        } else {
          onSubmit(values.email, values.password)
        }
    };

    function inputChange(e) {
      setIsError(false)
      handleChange(e)
    }

    return (
        <main className='signform'>
            <Logo />
            <h1 className='signform__title'>{title}</h1>
            <form className='signform__form' onSubmit={handleSubmit}>
                <div className='signform__inputs'>
                    {type === 'signup' && (
                        <label className='signform__label'>Имя
                            <input
                                id='username'
                                type='text'
                                className='signform__input'
                                name='username'
                                minLength='2'
                                maxLength='30'
                                required
                                placeholder="Введите ваше имя"
                                title="Введите ваше имя"
                                value={values.username || ''}
                                onChange={inputChange}
                                
                            />
                            <span id='name-error' className='signform__error'>
                                    {errors.name ? `${errors.name}` : ''}
                            </span>
                        </label>
                    )}
                    <label className='signform__label'>E-mail
                        <input
                            id='email'
                            type='email'
                            className='signform__input'
                            name='email'
                            minLength='2'
                            maxLength='30'
                            pattern={EMAIL_REGEX}
                            required
                            placeholder="Укажите ваш email"
                            title="Укажите ваш email"
                            value={values.email || ''}
                            onChange={inputChange}

                        />
                        <span id='email-error' className='signform__error'>
                            {errors.email ? `${errors.email}` : ''}
                        </span>
                    </label>
                    <label className='signform__label'>Пароль
                        <input
                            id='password'
                            type='password'
                            className='signform__input'
                            name='password'
                            minLength='4'
                            maxLength='15'
                            required
                            value={values.password || ''}
                            onChange={inputChange}
                            placeholder="Введите пароль"
                            title="Введите пароль"
                        />
                        <span id='password-error' className='signform__error'>
                            {errors.password ? `${errors.password}` : ''}
                        </span>
                    </label>
                </div>
                {type === 'signup' && (
                  <div className='signform__message-container signform__message-container_type_signup'>
                    <span className={`signform__message signform__message_type_signup ${isError ? 'signform__message_active' : "" }`}>При регистрации произошла ошибка.</span>
                  </div>
                )}
                {type === 'signin' && (
                  <div className='signform__message-container'>
                    <span className={`signform__message ${isError ? 'signform__message_active' : "" }`}>При входе произошла ошибка.</span>
                  </div>
                )}
                <button
                    className={`signform__submit-btn button ${type === 'signup' && 'signform__login-btn'}`}
                    type='submit'
                    disabled={!isValid || isSend || isError}
                > {btnName}
                </button>
            </form>
            <div className='signform__footer'>
                <p className='signform__subtitle'>{subtitle}</p>
                <Link to={linkTo} className='signform__link link'>{linkName}</Link>
            </div>
        </main>
    );
};

export default SignForm;