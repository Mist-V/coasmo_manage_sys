import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const spacecrafts = pgTable("spacecrafts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type").notNull(),
  status: text("status").notNull(),
  health: integer("health").notNull(),
  shield: integer("shield").notNull(),
});

export const insertSpacecraftSchema = createInsertSchema(spacecrafts).omit({
  id: true,
});

export type InsertSpacecraft = z.infer<typeof insertSpacecraftSchema>;
export type Spacecraft = typeof spacecrafts.$inferSelect;
