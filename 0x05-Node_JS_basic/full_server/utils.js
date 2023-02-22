const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.toString().trimEnd().split('\r\n');

        const csRecords = lines.filter((e) => e.slice(-2) === 'CS');
        const sweRecords = lines.filter((e) => e.slice(-3) === 'SWE');

        const csFirstnames = csRecords.map((e) => e.split(',')[0]);
        const sweFirstnames = sweRecords.map((e) => e.split(',')[0]);
        const payload = { CS: csFirstnames, SWE: sweFirstnames };

        resolve(payload);
      }
    });
  });
}

module.exports = readDatabase;
