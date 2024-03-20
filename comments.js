// Create web server
// Respond to comments with a list of all comments
// Respond to posts with a list of all posts
// Respond to all other requests with a 404
// Listen on port 8080
// Use the comments and posts arrays to store data

const express = require('express');
const app = express();

const comments = [
  {username: 'John', comment: 'Hello World'},
  {username: 'Mary', comment: 'How are you?'}
];

const posts = [
  {username: 'John', post: 'Hello World'},
  {username: 'Mary', post: 'How are you?'}
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.use((req, res) => {
  res.sendStatus(404);
});

app.listen(8080);