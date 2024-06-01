// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// @deno-types="@types/express"
import express from "express";
import { ExpensesContoller } from "./controllers/expenses.controller.ts";
import { logger } from "./tools/logger.ts";
import { loadSync } from "dotenv";
import { validateExpense } from "./validations/validateExpense.ts";
loadSync({ export: true });
console.log(Deno.env.toObject());
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
