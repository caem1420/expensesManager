import { expenses } from "../db/schema.ts";
import database from "../db/init.ts";

export class Expenses {
  private db;
  constructor() {
    const dbService = new database();
    this.db = dbService.db;
  }

  async getExpenses(): Promise<object> {
    const allExpenses = await this.db.select().from(expenses);
    return { status: true, data: allExpenses };
  }

  async saveExpense(description: string, type: number): Promise<object> {
    await this.db
      .insert(expenses)
      .values({ date: (new Date()).toISOString(), type, description });
    return { status: true };
  }
}
