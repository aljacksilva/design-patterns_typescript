import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Joshua', age: 32 });
myDatabaseClassic.add({ name: 'Mary', age: 40 });
myDatabaseClassic.add({ name: 'Peter', age: 21 });

export { myDatabaseClassic };
