import './Signup.css';
import SignForm from '../SignForm/SignForm';

function Signup({ onSignup, setIsError }){
  return (
    <SignForm
      type='signup'
      linkTo='/signin'
      title='Добро пожаловать!'
      btnName='Зарегистрироваться'
      subtitle='Уже зарегистрированы?'
      linkName='Войти'
      onSubmit={onSignup}
      setIsError={setIsError}
    />
  );
};
  
export default Signup;
