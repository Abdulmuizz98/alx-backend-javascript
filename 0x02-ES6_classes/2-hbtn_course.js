class HolbertonCourse {
  constructor(name, length, students) {
    if (!(typeof (name) === 'string')) throw TypeError('Name must be a string');
    if (!(typeof (length) === 'number')) throw TypeError('Length must be a number');
    if (!(students instanceof Array) || !(students.every((e) => typeof (e) === 'string'))) { throw TypeError('Students must be an array of strings'); }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(nm) {
    if (!(typeof (nm) === 'string')) throw TypeError('Name must be a string');
    this._name = nm;
  }

  get length() {
    return this._length;
  }

  set length(len) {
    if (!(typeof (len) === 'number')) throw TypeError('Length must be a number');
    this._length = len;
  }

  get students() {
    return this._students;
  }

  set students(std) {
    if (!(std instanceof Array) || !(std.every((e) => typeof (e) === 'string'))) { throw TypeError('Students must be an array of strings'); }
    this._students = std;
  }
}

export default HolbertonCourse;
