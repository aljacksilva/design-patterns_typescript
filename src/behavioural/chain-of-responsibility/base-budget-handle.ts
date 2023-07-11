import { CustomerBudget } from './customer-budget';

export abstract class BaseBudgetGetHandler {
  protected nextHandler: BaseBudgetGetHandler | null = null;

  setNextHandler(handler: BaseBudgetGetHandler): BaseBudgetGetHandler {
    this.nextHandler = handler;
    return handler;
  }

  handle(budget: CustomerBudget): CustomerBudget {
    if (this.nextHandler) return this.nextHandler.handle(budget);
    return budget;
  }
}
