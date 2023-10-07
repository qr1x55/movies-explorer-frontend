import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main/Main.jsx';
import Movies from './Movies/Movies.jsx';
import Signin from './Signin/Signin.jsx'
import Signup from './Signup/Signup.jsx'
import SavedMovies from './SavedMovies/SavedMovies.jsx'
import Profile from './Profile/Profile.jsx'
import NotFound from './NotFound/NotFound';
// import Preloader from './Preloader/Preloader';

function App() {
  return (
    <Router>
     <Routes>
       <Route path='/' element={<Main/>} />
       <Route path="/signin" element={<Signin />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/movies" element={<Movies />} />
       <Route path="/saved-movies" element={<SavedMovies />} />
       <Route path="/profile" element={<Profile />} />
       <Route path="*" element={<NotFound />}/>
     </Routes>
   </Router>
  );
}

export default App;
