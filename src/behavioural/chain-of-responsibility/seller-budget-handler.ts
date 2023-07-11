import { BaseBudgetGetHandler } from './base-budget-handle';
import { CustomerBudget } from './customer-budget';

export class SellerBudgetHandler extends BaseBudgetGetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 1000) {
      console.log('the seller treated the budget');
      budget.approved = true;
      return budget;
    }

    return super.handle(budget);
  }
}
