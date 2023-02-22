const readDatabase = require('./utils');

readDatabase('../database.csv').then((res) => console.log(res));
