import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    if (typeof (amount) !== 'number') throw TypeError('Amount must be a number');
    if (!(currency instanceof Currency)) throw TypeError('Currency must be an instance of currency');
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amt) {
    if (typeof (amt) !== 'number') throw TypeError('Amount must be a number');
    this._amount = amt;
  }

  get currency() {
    return this._currency;
  }

  set currency(cur) {
    if (!(cur instanceof Currency)) throw TypeError('Currency must be an instance of currency');
    this._currency = cur;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof (amount) !== 'number') throw TypeError('Amount must be a number');
    if (typeof (conversionRate) !== 'number') throw TypeError('ConversionRate must be a number');
    return amount * conversionRate;
  }
}

export default Pricing;
