import {
  date,
  integer,
  pgTable,
  serial,
  text,
  varchar,
} from "drizzle-orm/pg-core";

export const countries = pgTable("countries", {
  id: serial("id"),
  name: text("name"),
});

export const feelings = pgTable("feelings", {
  id: serial("id"),
  description: varchar("description"),
});

export const typeExpenses = pgTable("typeexpenses", {
  id: serial("id"),
  description: varchar("description"),
});

export const expenses = pgTable("expenses", {
  id: serial("id"),
  date: date("date"),
  description: varchar("description"),
  type: integer("type")
    .notNull()
    .references(() => typeExpenses.id),
});
