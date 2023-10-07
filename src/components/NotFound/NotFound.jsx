import './NotFound.css';
import { Link } from "react-router-dom";

function NotFound() {
  
  function handleClick() {
      window.history.back();
  };

  return (
    <section className='not-found'>
      <div className='not-found__container'>
        <h2 className='not-found__title'>404</h2>
        <p className='not-found__subtitle'>Страница не найдена</p>
      </div>
      <Link onClick={handleClick} className='not-found__link link'>Назад</Link>
    </section>
  );
};
  
export default NotFound;