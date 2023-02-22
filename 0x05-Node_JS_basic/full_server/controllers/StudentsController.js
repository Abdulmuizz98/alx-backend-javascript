const readDatabase = require('../utils');

const db = process.argv.slice(2)[0];

export default class StudentsController {
  static async getAllStudents(request, response) {
    try {
      response.statusCode = 200;
      const result = await readDatabase(db);
      // console.log(ob);
      let msg = 'This is the list of our students';
      for (const k in result) {
        if (result.hasOenProperty(k)) {
          msg += `\nNumber of students in ${k}: ${result[k].length}. List: ${result[k].join(', ')}`;
        }
      }
      console.log(msg);
      return response.end(msg);
    } catch (err) {
      response.statusCode = 500;
      // return response.end(err);
      return response.end('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    try {
      const ob = await readDatabase(db);
      const { major } = request.params;

      if (major === 'CS' || major === 'SWE') {
        response.statusCode = 200;
        const msg = `List: ${ob[major].join(', ')}`;
        response.end(msg);
      } else {
        response.statusCode = 500;
        response.end('Major parameter must be CS or SWE');
      }
    } catch (err) {
      response.statusCode = 500;
      response.end('Cannot load the database');
    }
  }
}
