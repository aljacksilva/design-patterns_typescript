import { BaseBudgetGetHandler } from './base-budget-handle';
import { CustomerBudget } from './customer-budget';

export class CeoBudgetHandler extends BaseBudgetGetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    console.log('the CEO treats any budget');
    budget.approved = true;
    return budget;
  }
}
