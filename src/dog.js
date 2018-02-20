export default class Dog {
  constructor() {
    this._name = 'Dog';
    console.log('in dog class');
  }
  get name() {
    return this._name;
  }
}
