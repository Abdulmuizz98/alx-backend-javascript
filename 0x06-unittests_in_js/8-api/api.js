const express = require('express');
const port = '7865';
const app = express();


app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to the payment system');
    // res.end('Hello Holberton School!');
})

app.listen(port, ()=>{
    console.log('API available on localhost port 7865')
})