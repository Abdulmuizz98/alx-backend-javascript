const displayMessage = require('./0-console');
// const { spawn } = require('node:child_process');

displayMessage('Welcome to Holberton School, what is your name?');
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    displayMessage(`Your name is: ${name.slice(0, name.length - 1)}`);
  }
});
process.stdin.on('end', () => {
  if (!process.stdin.isTTY) {
    displayMessage('This important software is now closing');
  }
});
