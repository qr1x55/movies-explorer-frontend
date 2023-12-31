import './NotFound.css';
import { Link } from "react-router-dom";

function NotFound() {
  
  function handleClick() {
      window.history.back();
  };

  return (
    <main className='not-found'>
      <section className='not-found__container'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__subtitle'>Страница не найдена</p>
      </section>
      <Link onClick={handleClick} className='not-found__link link'>Назад</Link>
    </main>
  );
};
  
export default NotFound;