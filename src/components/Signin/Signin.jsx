import './Signin.css';
import SignForm from "../SignForm/SignForm";

function Signin({onSignin, setIsError}){
  return (
    <SignForm
      type='signin'
      linkTo='/signup'
      title='Рады видеть!'
      btnName='Войти'
      subtitle='Ещё не зарегистрированы?'
      onSubmit={onSignin}
      linkName='Регистрация'
      setIsError={setIsError}
    />
  );
};
 
export default Signin;