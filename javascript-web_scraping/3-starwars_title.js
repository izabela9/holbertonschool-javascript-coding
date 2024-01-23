#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2];

const apiurl = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request(apiurl, (error, response, body) => {
  if (error) {
    console.log(error);
  }
    const movieData = JSON.parse(body);
    console.log(movieData.title);
  }
);
