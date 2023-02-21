const displayMessage = require('./0-console');
const { spawn } = require('node:child_process');


// readline.question("Welcome to Holberton School, what is your name?\n", name => {
    //     readline.close()
    //     // if(!Boolean(process.stdin.isTTY))
    //     displayMessage("This important software is now closing");
    // });
displayMessage("Welcome to Holberton School, what is your name?");
process.stdin.on('readable', function(){
    const name = process.stdin.read()
    if (name !== null){
        displayMessage("Your name is: " + name);
    }
})