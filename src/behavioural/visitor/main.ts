import { AlcoholicDrink } from './alcoholic-drink';
import { BrazilTaxVisitor } from './brazil-tex-visitor';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { USTaxVisitor } from './us-tex-visitor';

const food = new Food(10);
const cigarette = new Cigarette(5);
const alcoholicDrink = new AlcoholicDrink(5);
const cart = [food, cigarette, alcoholicDrink];
const brazilTaxVisitor = new BrazilTaxVisitor();
const usTaxiVistor = new USTaxVisitor();
const total = cart.reduce((sum, item) => item.getPrice() + sum, 0);
const totalWithTaxesBrazil = cart.reduce(
  (sum, item) => item.getPriceWithTaxes(brazilTaxVisitor) + sum,
  0,
);
const totalWithTaxesUS = cart.reduce(
  (sum, item) => item.getPriceWithTaxes(usTaxiVistor) + sum,
  0,
);

console.log(total);
console.log(totalWithTaxesBrazil);
console.log(totalWithTaxesUS);
