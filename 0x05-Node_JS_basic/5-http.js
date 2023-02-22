const http = require('http');
const countStudents = require('./3-read_file_async');

const host = 'localhost';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    const message = 'Hello Holberton School!';
    res.end(message);
  } else if (req.url === '/students') {
    const message = countStudents('database.csv');
    message.then((msg) => res.end(msg));
  }

  // res.statusCode = 200;
});

app.listen(port, host, () => {
  console.log(`Server running on port ${port}...`);
});

module.exports = app;
