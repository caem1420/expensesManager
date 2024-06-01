import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { loadSync } from "dotenv";
const envData = loadSync({ envPath: "../.env", allowEmptyValues: true });
export default class db {
  public db;
  constructor() {
    let connectionString = `postgres://postgres.wykeiyxxemprnqkxcvqo:@!xdsf5r7pQGU.G@aws-0-us-west-1.pooler.supabase.com:6543/postgres`;
    // let connectionString = `postgres://${envData.SQL_USER}:${envData.SQL_PASSWORD}@${envData.SQL_PORT}:${envData.SQL_PORT}/${envData.SQL_DATABASE}`;
    if (envData.LOCAL_PROJECT === "true") {
      connectionString =
        "postgresql://postgres:postgres@127.0.0.1:54322/postgres";
    }
    console.log(connectionString);
    const client = postgres(connectionString, { prepare: false });
    this.db = drizzle(client);
  }
}
