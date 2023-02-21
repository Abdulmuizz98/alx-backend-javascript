const displayMessage = require('./0-console');
// const { spawn } = require('node:child_process');

displayMessage("Welcome to Holberton School, what is your name?");
process.stdin.on('readable', function(){
    const name = process.stdin.read()
    if (name !== null){
        displayMessage("Your name is: " + name);
    }
    if(!process.stdin.isTTY){
        displayMessage("This important software is now closing")
    }
})