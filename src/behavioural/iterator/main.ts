import { MyDataStructure } from './my-data-structure';
import { MyReversetIterator } from './my-reverse-iterator';

const dataStructure = new MyDataStructure();

dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F');

const [a, b] = dataStructure;
console.log('GET:', a, b);
console.log('EXECUTED SEVERAL THINGS AND AFTER USED THE ITERATOR');
const [c, ...rest] = dataStructure;
console.log(c, rest);

dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}
console.log();
dataStructure.changeIterator(new MyReversetIterator(dataStructure));

console.log('HERE NEED RESET THE ITERATOR');
dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}
console.log();
