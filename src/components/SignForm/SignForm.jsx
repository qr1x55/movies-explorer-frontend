import './SignForm.css';
import Logo from '../Logo/Logo';
import React from 'react';
import { Link } from 'react-router-dom';
import { useFormValidator } from '../../hooks/useFormValidator';
import Tooltip from '../Tooltip/Tooltip';


function SignForm({
    type,
    linkTo,
    title,
    btnName,
    linkName,
    subtitle,
    tooltip,
}) {
    const { values, errors, isValid, handleChange } = useFormValidator();

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Заглушка:Форма отправлена');
    };

    return (
        <main className='signform'>
            <Logo />
            <h1 className='signform__title'>{title}</h1>
            <form className='signform__form' onSubmit={handleSubmit}>
                <div className='signform__inputs'>
                    {type === 'signup' && (
                        <label className='signform__label'>Имя
                            <input
                                id='name'
                                type='text'
                                className='signform__input'
                                name='name'
                                minLength='2'
                                maxLength='30'
                                required
                                placeholder="Введите ваше имя"
                                title="Введите ваше имя"
                                value={values.name || ''}
                                onChange={handleChange}
                                
                            />
                            <span id='name-error' className='signform__error'>
                                    {errors.name ? `Что-то пошло не так...` : ''}
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
                            required
                            placeholder="Укажите ваш email"
                            title="Укажите ваш email"
                            value={values.email || ''}
                            onChange={handleChange}

                        />
                        <span id='email-error' className='signform__error'>
                            {errors.email ? `Что-то пошло не так...` : ''}
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
                            onChange={handleChange}
                            placeholder="Введите пароль"
                            title="Введите пароль"
                        />
                        <span id='password-error' className='signform__error'>
                            {errors.password ? `Что-то пошло не так...` : ''}
                        </span>
                    </label>
                    <Tooltip {...tooltip} />
                </div>
                <button
                    className={`signform__submit-btn link ${type === 'signup' && 'signform__login-btn'}`}
                    type='submit'
                    disabled={!isValid}
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