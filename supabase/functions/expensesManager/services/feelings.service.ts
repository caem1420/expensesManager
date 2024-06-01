import { feelings } from "../db/schema.ts";
import database from "../db/init.ts";


export class Feelings {
  private db;
  constructor() {
    const dbService = new database();
    this.db = dbService.db;
  }

  async getFeelings(): Promise<object> {
    const allFeelings = await this.db.select().from(feelings);
    return { status: true, data: allFeelings };
  }

  async saveFeelings(description: string): Promise<object> {
    await this.db.insert(feelings).values({ description });
    return { status: true };
  }
}
