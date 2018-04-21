var redux = require('redux');

console.log('Starting redux example');

//pure function
var add = (a,b) => {
  return a+b;
}

var changeProp = (obj) => {
  return {
    ...obj,
    name: 'Jen'
  }
}

var res = changeProp ({
  name: 'Andrew',
  age: 25
})
console.log(res);
