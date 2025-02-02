import { integer, text, date, boolean, pgTable } from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
  date: date("date"),
  item: text("item"),
  price: integer("price"),
  category: text("category"),
  payer: text("payer")
});
