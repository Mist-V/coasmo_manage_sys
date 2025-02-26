import { spacecrafts, type Spacecraft, type InsertSpacecraft } from "@shared/schema";

export interface IStorage {
  getSpacecrafts(): Promise<Spacecraft[]>;
  getSpacecraft(id: number): Promise<Spacecraft | undefined>;
  createSpacecraft(spacecraft: InsertSpacecraft): Promise<Spacecraft>;
  updateSpacecraft(id: number, spacecraft: Partial<InsertSpacecraft>): Promise<Spacecraft>;
  deleteSpacecraft(id: number): Promise<void>;
}

export class MemStorage implements IStorage {
  private spacecrafts: Map<number, Spacecraft>;
  private currentId: number;

  constructor() {
    this.spacecrafts = new Map();
    this.currentId = 1;
  }

  async getSpacecrafts(): Promise<Spacecraft[]> {
    return Array.from(this.spacecrafts.values());
  }

  async getSpacecraft(id: number): Promise<Spacecraft | undefined> {
    return this.spacecrafts.get(id);
  }

  async createSpacecraft(insertSpacecraft: InsertSpacecraft): Promise<Spacecraft> {
    const id = this.currentId++;
    const spacecraft: Spacecraft = { ...insertSpacecraft, id };
    this.spacecrafts.set(id, spacecraft);
    return spacecraft;
  }

  async updateSpacecraft(id: number, update: Partial<InsertSpacecraft>): Promise<Spacecraft> {
    const existing = await this.getSpacecraft(id);
    if (!existing) throw new Error("Spacecraft not found");
    
    const updated = { ...existing, ...update };
    this.spacecrafts.set(id, updated);
    return updated;
  }

  async deleteSpacecraft(id: number): Promise<void> {
    this.spacecrafts.delete(id);
  }
}

export const storage = new MemStorage();
