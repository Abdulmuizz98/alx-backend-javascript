const express = require('express');
const port = '7865';
const app = express();

app.use(express.json({extended: true, limit: '1mb'}))

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to the payment system');
    // res.end('Hello Holberton School!');
})

app.get('/cart/:id(\\d+)', (req, res) => {
    const {id} = req.params;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Payment methods for cart ${id}`);
})

app.get('/available_payments', (req, res) => {
    const obj = {
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(JSON.stringify(obj));
})

app.post('/login', (req, res) => {
    // const {id} = req.params;
    const {userName} =  req.body;
    res.statusCode = 201;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Welcome ${userName}`);
})

app.listen(port, ()=>{
    console.log('API available on localhost port 7865')
})