import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSpacecraftSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/spacecrafts", async (_req, res) => {
    const spacecrafts = await storage.getSpacecrafts();
    res.json(spacecrafts);
  });

  app.post("/api/spacecrafts", async (req, res) => {
    const parsed = insertSpacecraftSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error });
    }
    const spacecraft = await storage.createSpacecraft(parsed.data);
    res.json(spacecraft);
  });

  app.patch("/api/spacecrafts/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const update = req.body;
    try {
      const spacecraft = await storage.updateSpacecraft(id, update);
      res.json(spacecraft);
    } catch (error) {
      res.status(404).json({ error: "Spacecraft not found" });
    }
  });

  app.delete("/api/spacecrafts/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    await storage.deleteSpacecraft(id);
    res.status(204).send();
  });

  const httpServer = createServer(app);
  return httpServer;
}
