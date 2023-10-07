import React from 'react';
import Promo from './Promo/Promo.jsx';
import AboutProject from './AboutProject/AboutProject.jsx';
import Techs from './Techs/Techs.jsx';
import AboutMe from './AboutMe/AboutMe.jsx';
import Portfolio from './Portfolio/Portfolio.jsx';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import './Main.css'

function Main() {
  return (
    <>
      <Header/>
      <main className="main">
        <Promo/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
        <Portfolio/>
      </main>
      <Footer/>
    </>
  );
}

export default Main;