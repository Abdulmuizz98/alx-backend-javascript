const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  // console.log(data.length)
  const lines = data.toString().trimEnd().split('\r\n');
  const cs = lines.filter((e) => e.slice(-2) === 'CS');
  const swe = lines.filter((e) => e.slice(-3) === 'SWE');

  const csFirstnames = cs.map((e) => e.split(',')[0]);
  const sweFirstnames = swe.map((e) => e.split(',')[0]);
  // console.log(lines)
  console.log(`Number of students: ${lines.length - 1}`);
  console.log(`Number of students in CS: ${cs.length}. List: ${csFirstnames.join(', ')}`);
  console.log(`Number of students in SWE: ${swe.length}. List: ${sweFirstnames.join(', ')}`);
}

module.exports = countStudents;
