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

  const csFirstnames = cs.map((e) => e.split(',')[0]).join(', ');
  const sweFirstnames = swe.map((e) => e.split(',')[0]).join(', ');

  const csCount = cs.length;
  const sweCount = swe.length;
  const count = csCount + sweCount;

  console.log(`Number of students: ${count}`);
  console.log(`Number of students in CS: ${csCount}. List: ${csFirstnames}`);
  console.log(`Number of students in SWE: ${sweCount}. List: ${sweFirstnames}`);
}

module.exports = countStudents;
