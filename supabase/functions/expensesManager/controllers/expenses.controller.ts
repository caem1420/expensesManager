import { Expenses } from "../services/expenses.service.ts";
import { TypeExpenses } from "../services/typeExpenses.service.ts";
// @deno-types="@types/express"
import { Response, Request } from "express";
export class ExpensesContoller {
  private expensesService: Expenses;
  private typeExpensesService: TypeExpenses;
  constructor() {
    this.expensesService = new Expenses();
    this.typeExpensesService = new TypeExpenses();
  }

  public saveExpense = async (req: Request, res: Response) => {
    const { description, type } = req.body;
    await this.expensesService.saveExpense(description, type);
    res.send(true);
  };

  public getExpenses = async (_req: Request, res: Response) => {
    const data = await this.expensesService.getExpenses();
    res.send(data);
  };
}
