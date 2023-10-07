import './Tooltip.css';
import React from 'react';
import { INVALID_CODE, SUCCESSFUL_CODE } from '../../utils/constants';

function Tooltip({isShown, message, code, type}) {

    const [textMessage, setTextMessage] = React.useState('');
  
    function getMessage(type) {
      if (type === 'profile') {
        return 'При обновлении профиля произошла ошибка'
      } else if(type === 'register'){
        return 'При регистрации пользователя произошла ошибка'
      } else if(type === 'login'){
        return 'Вы ввели неправильный логин или пароль'
      }
    };
  
    React.useEffect(() => {
      switch (code) {
        case SUCCESSFUL_CODE:
          setTextMessage('Данные успешно обновлены');
          break;
        case INVALID_CODE:
          setTextMessage(getMessage(type));
          break;
        default:
          setTextMessage(message);
      }
    }, [code, message, type]);
  
    return (
      <div className='tooltip__message'>
        {isShown && (
          <p className={`tooltip__message_text ${code === SUCCESSFUL_CODE &&'tooltip__message_success'}`}>
            {textMessage}
          </p>
        )}
      </div>
    );
  };
    
  export default Tooltip;
