#!/usr/bin/node
const request = require('request');
const process = require('process');

request(process.argv[2], (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const filmsData = JSON.parse(body);
    const newData = filmsData.results.filter((film) => {
      return film.characters.includes('https://swapi-api.hbtn.io/api/people/18/');
    });
    console.log(newData.length);
  }
});
