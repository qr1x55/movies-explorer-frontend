import './Signup.css';
import SignForm from '../SignForm/SignForm';


function Signup({ onSignup, infoMessage }){
  return (
    <SignForm
      type='signup'
      linkTo='/signin'
      title='Добро пожаловать!'
      btnName='Зарегистрироваться'
      subtitle='Уже зарегистрированы?'
      linkName='Войти'
      onSubmit={onSignup}
      infoMessage={infoMessage}
    />
  );
};
  
export default Signup;
