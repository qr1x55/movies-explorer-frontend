import './App.css';
import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { SendContext } from '../contexts/SendContext.js';
import { ErrorContext } from '../contexts/ErrorContext.js';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Main from './Main/Main.jsx';
import Movies from './Movies/Movies.jsx';
import Signin from './Signin/Signin.jsx'
import Signup from './Signup/Signup.jsx'
import SavedMovies from './SavedMovies/SavedMovies.jsx'
import Profile from './Profile/Profile.jsx'
import NotFound from './NotFound/NotFound.jsx';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute.jsx';
import mainApi from '../utils/MainApi.js';
import Preloader from './Preloader/Preloader.jsx';

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isCheckToken, setIsCheckToken] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (localStorage.jwt) {
      Promise.all([mainApi.getUserInfo(localStorage.jwt), mainApi.getMovies(localStorage.jwt)])
        .then(([userInfo, moviesData]) => {
          setSavedMovies(moviesData.reverse())
          setCurrentUser(userInfo)
          setLoggedIn(true)
          setIsCheckToken(false)
        })
        .catch((error) => {
          console.error(`Ошибка при загрузке начальных данных ${error}`);
          setIsCheckToken(false)
          localStorage.clear()
        })
    } else {
      setLoggedIn(false)
      setIsCheckToken(false)
      localStorage.clear()
    }
  }, [loggedIn])

  function handleSignin(email, password) {
    setIsSend(true)
    mainApi.signin(email, password)
      .then(res => {
        localStorage.setItem('jwt', res.token)
        setLoggedIn(true)
        navigate('/movies')
        window.scrollTo(0,0)
      })
      .catch((error) => {
        setIsError(true)
        console.error(`Ошибка при авторизации ${error}`)
      })
      .finally(() => setIsSend(false))
  }

  function handleSignup(username, email, password) {
    setIsSend(true)
    mainApi.signup(username, email, password)
      .then((res) => {
        if (res) {
          setLoggedIn(false)
          handleSignin(email, password)
        }
      })
      .catch((error) => {
        setIsError(true)
        console.error(`Ошибка при регистрации ${error}`)
      })
      .finally(() => setIsSend(false))
  }

  function editUser(name, email) {
    setIsSend(true)
    mainApi.editUserInfo(name, email, localStorage.jwt)
      .then((res) => {
        setCurrentUser(res)
        setIsSuccess(true)
      })
      .catch((error) => {
        setIsError(true)
        console.error(`Ошибка при редактировании аккаунта ${error}`);
      })
      .finally(() => setIsSend(false))
  }

  function handleSignOut() {
    localStorage.clear();
    setLoggedIn(false)
    navigate('/')
  }

  function deleteMovie(movieId) {
    mainApi.removeMovie(movieId, localStorage.jwt)
      .then(() => {
        setSavedMovies(savedMovies.filter(movie => { return movie._id !== movieId}))
      })
      .catch((error) => console.error(`Ошибка при удалении ${error}`))
  }

  function toggleMovie(data) {
    const addedMOvie = savedMovies.some(movie => data.id === movie.movieId)
    const findMovie = savedMovies.filter((movie) => {return movie.movieId === data.id})
    console.log(findMovie)
    if (addedMOvie) {
      deleteMovie(findMovie[0]._id)
    } else {
      mainApi.addMovie(data, localStorage.jwt)
        .then((res) => {
          setSavedMovies([res, ...savedMovies])
        })
        .catch((error) => console.error(`Ошибка при лайке ${error}`))
    }
  } 

  return (
    <div className='page'>
      {isCheckToken ? <Preloader/> :
        <CurrentUserContext.Provider value={currentUser}>
          <SendContext.Provider value={isSend}>
            <ErrorContext.Provider value={isError}>
              <Routes>
                <Route path='/' element={<Main loggedIn={loggedIn}/>} />
                <Route path="/signin" element={
                loggedIn ? <Navigate to='/movies' replace/> :
                <Signin 
                onSignin={handleSignin} 
                setIsError={setIsError}
                /> } />
                <Route path="/signup" element={
                loggedIn ? <Navigate to='/movies' replace/> :
                <Signup 
                onSignup={handleSignup} 
                setIsError={setIsError}
                /> } />
                <Route path="/movies" element={<ProtectedRoute 
                element={Movies}
                loggedIn={loggedIn}
                savedMovies={savedMovies} 
                addMovie={toggleMovie}
                setIsError={setIsError}
                />} />
                <Route path="/saved-movies" element={<ProtectedRoute 
                element={SavedMovies}
                loggedIn={loggedIn}
                onDelete={deleteMovie}
                savedMovies={savedMovies} 
                setIsError={setIsError}
                />} />
                <Route path="/profile" element={<ProtectedRoute 
                element={Profile}
                loggedIn={loggedIn}
                onEdit={editUser} 
                onSignOut={handleSignOut} 
                isSuccess={isSuccess}
                setIsSuccess={setIsSuccess}
                />} />
                <Route path="*" element={<NotFound />}/>
              </Routes>
            </ErrorContext.Provider>
          </SendContext.Provider>
      </CurrentUserContext.Provider>
    }
  </div>
  );
}

export default App;
