import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // eslint-disable-next-line
  cloneCar() {
    return new Car[Symbol.species]();
  }
}

export default EVCar;
