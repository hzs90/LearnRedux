var redux = require('redux');

console.log('Starting todo redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

//subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('state is', state);
  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...'
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="'+ state.map.url +'"target="_blank">View your location</a>'
  }
});
// unsubscribe()

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Zsolt'));

store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Walking'));
store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Daniel'));

store.dispatch(actions.addMovie('Spiderman', 'Action'));
store.dispatch(actions.addMovie('Moon', 'Scifi'));
store.dispatch(actions.removeMovie(1));
