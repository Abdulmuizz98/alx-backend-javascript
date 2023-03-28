class Currency {
  constructor(code, name) {
    if (typeof (code) !== 'string') throw TypeError('Code must be a string');
    if (typeof (name) !== 'string') throw TypeError('Name must be a string');
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(cd) {
    if (typeof (cd) !== 'string') throw TypeError('Code must be a string');
    this._code = cd;
  }

  get name() {
    return this._name;
  }

  set name(nm) {
    if (typeof (nm) !== 'string') throw TypeError('Name must be a string');
    this._name = nm;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}

export default Currency;
