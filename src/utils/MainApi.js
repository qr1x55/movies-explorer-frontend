class MainApi {
  constructor(data){
    this._baseUrl = data.baseUrl;
  }

  _responseHandler(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status)
  };

  _request(postUrl, options) {
    return fetch(`${this._baseUrl}${postUrl}`, options)
      .then(this._responseHandler)
  }

  signup(username, email, password) {
    return(
      this._request('/signup', {
        method: 'POST',
        headers: {
          Accept: "application/json",
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: username,
          email: email,
          password: password
        })
      })
    )
  }

  signin(email, password) {
    return(
      this._request('/signin', {
        method: 'POST',
        headers: {
          Accept: "application/json",
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
    )
  }

  getUserInfo(token) {
    return this._request('/users/me', {
      headers: {
        'Authorization' : `Bearer ${token}`
      }
    })
  }

  editUserInfo(name, email, token) {
    return this._request('/users/me', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`
      },
      body: JSON.stringify({
        name: name,
        email: email,
      })
    })
  }

  getMovies(token) {
    return this._request('/movies', {
      headers: {
        'Authorization' : `Bearer ${token}`
      }
    })
  }

  addMovie(data, token) {
    return(
      this._request('/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${token}`
        },
        body: JSON.stringify({
          country: data.country,
          director: data.director,
          duration: data.duration,
          year: data.year,
          description: data.description,
          image: `https://api.nomoreparties.co${data.image.url}`,
          trailerLink: data.trailerLink,
          thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
          movieId: data.id,
          nameRU: data.nameRU,
          nameEN: data.nameEN
        })
      }) 
    )
  }

  removeMovie(movieId, token) {
    return this._request(`/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        'Authorization' : `Bearer ${token}`
      }
    })
  }
}

const mainApi = new MainApi({
  baseUrl: 'http://localhost:3000',
});

export default mainApi