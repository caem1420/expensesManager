import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { enviroment } from "../tools/enviroment.ts";
export default class db {
  public db;
  constructor() {
    let connectionString = `postgres://${enviroment.SQL_USER}:${enviroment.SQL_PASSWORD}@${enviroment.SQL_HOST}:${enviroment.SQL_PORT}/${enviroment.SQL_DATABASE}`;
    if (enviroment.LOCAL_PROJECT) {
      connectionString =
        "postgresql://postgres:postgres@127.0.0.1:54322/postgres";
    }
    console.log(connectionString);
    const client = postgres(connectionString, { prepare: false });
    this.db = drizzle(client);
  }
}
