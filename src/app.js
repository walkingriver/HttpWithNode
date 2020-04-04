const fetch = require('node-fetch');
const url = 'https://api.chucknorris.io/jokes/random';

function getJoke() {
  return fetch(url)
    .then(res => res.json());  
}

function decodeJoke(joke) {
  return joke.value;
}

console.log('Fetching a random Chuck Norris joke.');
getJoke().then((res)=> console.log(decodeJoke(res)));