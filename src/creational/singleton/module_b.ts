import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Robert', age: 38 });
myDatabaseClassic.add({ name: 'Ellen', age: 20 });
myDatabaseClassic.add({ name: 'John', age: 21 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);
