#!/usr/bin/node
const request = require('request');

request.get(process.argv[2], function (error, response, body) {
  if (!error && response.statusCode) {
    console.log(`code: ${response && response.statusCode}`);
  }
}
);
