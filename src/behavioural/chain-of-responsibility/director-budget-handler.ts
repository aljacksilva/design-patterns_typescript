import { BaseBudgetGetHandler } from './base-budget-handle';
import { CustomerBudget } from './customer-budget';

export class DirectorBudgetHandler extends BaseBudgetGetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 50000) {
      console.log('the director treated the budget');
      budget.approved = true;
      return budget;
    }

    return super.handle(budget);
  }
}
