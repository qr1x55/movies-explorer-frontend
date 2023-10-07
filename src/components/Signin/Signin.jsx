import './Signin.css';
import SignForm from "../SignForm/SignForm";

function Signin({onLogin, infoMessage}){

  //---РАЗМЕТКА JSX---
  return (
    <SignForm
      type='signin'
      linkTo='/signup'
      title='Рады видеть!'
      btnName='Войти'
      subtitle='Ещё не зарегистрированы?'
      onSubmit={onLogin}
      linkName='Регистрация'
      infoMessage={infoMessage}
    />
  );
};
 
export default Signin;