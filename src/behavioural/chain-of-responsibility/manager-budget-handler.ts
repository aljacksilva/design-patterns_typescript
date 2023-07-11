import { BaseBudgetGetHandler } from './base-budget-handle';
import { CustomerBudget } from './customer-budget';

export class ManagerBudgetHandler extends BaseBudgetGetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 5000) {
      console.log('the manager treated the budget');
      budget.approved = true;
      return budget;
    }

    return super.handle(budget);
  }
}
