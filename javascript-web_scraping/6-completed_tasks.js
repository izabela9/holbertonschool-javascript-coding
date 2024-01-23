#!/usr/bin/node
const request = require('request');

request(process.argv[2], (error, response, body) => {
  if (error) {
    console.log(error);
  }
  const todosData = JSON.parse(body);

  const completedTasks = {};

  todosData.forEach((todo) => {
    if (todo.completed === true) {
      if (completedTasks[todo.userId]) {
        completedTasks[todo.userId]++;
      } else {
        completedTasks[todo.userId] = 1;
      }
    }
  });
  console.log(completedTasks);
});
