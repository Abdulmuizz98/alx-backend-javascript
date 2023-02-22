const express = require('express');
const countStudents = require('./3-read_file_async');

const db = process.argv.slice(2)[0];
const app = express();

const port = 1245;
// const host = 'localhost';

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.set('Content-Type', 'text/plain');
  // res.type('.txt')
  const message = countStudents(db);
  message.then((msg) => res.end(`This is the list of our students\n${msg}`));
});

app.listen(port, () => {
  console.log('Server listening on port', port);
});

module.exports = app;
