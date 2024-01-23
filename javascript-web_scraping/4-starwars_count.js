#!/usr/bin/node
const request = require('request');
const process = require('process');

request(process.argv[2], function(error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const filmsData = JSON.parse(response.body);
    const newData = filmsData.results.filter((film) => {
      return film.characters.includes('https://swapi-api.hbtn.io/api/people/18/');
    });
    console.log(newData.length);
  }
});
