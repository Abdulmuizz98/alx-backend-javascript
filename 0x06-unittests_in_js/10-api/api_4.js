const express = require('express');
const app = express();

app.get('/', function (request, response) {
    response.send('Welcome to the payment system');
});

app.get('/cart/:cartId', function (request, response) {
    response.send(`Payment methods for cart ${request.params.cartId}`);
});

app.listen(7865, function () {
    console.log('API available on localhost port 7865');
});