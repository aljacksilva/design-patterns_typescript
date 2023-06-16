import { MainDishBuilder } from '../../creational/builder/classes/main-dish-builder';

export class BuilderFacade {
  // This is the façade for the folder src/creational/builder/main.ts
  private mainDishBuilder = new MainDishBuilder();

  makeMeal1(): void {
    this.mainDishBuilder.makeMeal().makeDessert();

    console.log(this.mainDishBuilder.getMeal());
    console.log(this.mainDishBuilder.getPrice());
  }

  makeMeal2(): void {
    this.mainDishBuilder.reset();

    const meal2 = this.mainDishBuilder.makeBeverage().getMeal();
    console.log(meal2);
  }
}
