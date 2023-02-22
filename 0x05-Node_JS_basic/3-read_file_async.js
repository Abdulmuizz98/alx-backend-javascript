const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.toString().trimEnd().split('\r\n');

        const csRecords = lines.filter((e) => e.slice(-2) === 'CS');
        const sweRecords = lines.filter((e) => e.slice(-3) === 'SWE');

        const csFirstnames = csRecords.map((e) => e.split(',')[0]);
        const sweFirstnames = sweRecords.map((e) => e.split(',')[0]);

        console.log(`Number of students: ${lines.length - 1}`);
        console.log(`Number of students in CS: ${csRecords.length}. List: ${csFirstnames.join(', ')}`);
        console.log(`Number of students in SWE: ${sweRecords.length}. List: ${sweFirstnames.join(', ')}`);
        resolve();
      }
    });
  });
}

module.exports = countStudents;
