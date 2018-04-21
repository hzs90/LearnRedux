var redux = require('redux');

console.log('Starting todo redux example');

var stateDefault = {
  name: '',
  hobbies: [],
  movies: []
};

var nextHobbyId = 1;
var nextMovieId = 1;

var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
      case 'REMOVE_HOBBY':
        return state.filter((hobby) => hobby.id !== action.id);
    default:
      return state;
  }
};

var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          movie: action.movie,
          genre: action.genre
        }
      ];
      case 'REMOVE_MOVIE':
        return state.filter((movie) => movie.id !== action.id);
    default:
      return state;
  }
};

var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name
    default:
      return state;
  }
};


var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
})

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

//subscribe to changes
store.subscribe(() => {
  var state = store.getState();
  console.log('searchText is', state.name);
  document.getElementById('app').innerHTML = state.name;
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'work'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Walking'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'play'
});

store.dispatch({
  type: 'ADD_MOVIE',
  movie: 'Spiderman',
  genre: 'Action'
});

store.dispatch({
  type: 'ADD_MOVIE',
  movie: 'Moon',
  genre: 'Scifi'
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 2
});
