import { typeExpenses } from "../db/schema.ts";
import database from "../db/init.ts";
import { eq } from "drizzle-orm/expressions";


export class TypeExpenses {
  private db;
  constructor() {
    const dbService = new database();
    this.db = dbService.db;
  }

  async getTypesExpenses(): Promise<object> {
    const allTypeExpenses = await this.db.select().from(typeExpenses);
    return { status: true, data: allTypeExpenses };
  }

  async saveTypeExpenses(description: string): Promise<object> {
    await this.db.insert(typeExpenses).values({ description });
    return { status: true };
  }

  async getTypeExpensesById(id: number): Promise<any> {
    const allTypeExpenses = await this.db.select().from(typeExpenses).where(eq(typeExpenses.id, id));
    return { status: true, data: allTypeExpenses };
  }
}
