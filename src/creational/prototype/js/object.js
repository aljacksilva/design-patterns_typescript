const personPrototype = {
  firstName: 'Jack',
  lastName: 'Almeida',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);

anotherPerson.firstName = 'John';

console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());
