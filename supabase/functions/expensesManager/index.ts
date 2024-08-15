// @deno-types="@types/express"
import express from "express";
import { ExpensesContoller } from "./controllers/expenses.controller.ts";
import { logger } from "./tools/logger.ts";
import { validateExpense } from "./validations/validateExpense.ts";
const app = express();
app.use(express.json());
app.use(logger);
const controller = new ExpensesContoller();
// Setup type definitions for built-in Supabase Runtime APIs
/// <reference types="https://esm.sh/@supabase/functions-js/src/edge-runtime.d.ts" />

app.get("/expensesManager/expenses", controller.getExpenses);
app.post("/expensesManager/expenses", validateExpense, controller.saveExpense);
app.get("/expensesManager/test", (_req, res) => {
  res.send("carlks");
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
