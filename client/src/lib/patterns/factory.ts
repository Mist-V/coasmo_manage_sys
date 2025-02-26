import type { InsertSpacecraft } from "@shared/schema";

// Product interface
export interface ISpacecraft {
  name: string;
  type: string;
  status: string;
  health: number;
  shield: number;
}

// Concrete Products
export class ExplorerSpacecraft implements ISpacecraft {
  constructor(name: string) {
    this.name = name;
    this.type = "Explorer";
    this.status = "Ready";
    this.health = 100;
    this.shield = 80;
  }
  name: string;
  type: string;
  status: string;
  health: number;
  shield: number;
}

export class BattleshipSpacecraft implements ISpacecraft {
  constructor(name: string) {
    this.name = name;
    this.type = "Battleship";
    this.status = "Ready";
    this.health = 150;
    this.shield = 120;
  }
  name: string;
  type: string;
  status: string;
  health: number;
  shield: number;
}

export class CargoSpacecraft implements ISpacecraft {
  constructor(name: string) {
    this.name = name;
    this.type = "Cargo";
    this.status = "Ready";
    this.health = 80;
    this.shield = 60;
  }
  name: string;
  type: string;
  status: string;
  health: number;
  shield: number;
}

// Creator (Factory Method)
export abstract class SpacecraftFactory {
  abstract createSpacecraft(name: string): ISpacecraft;
  
  toInsertSpacecraft(spacecraft: ISpacecraft): InsertSpacecraft {
    return spacecraft;
  }
}

// Concrete Creators
export class ExplorerFactory extends SpacecraftFactory {
  createSpacecraft(name: string): ISpacecraft {
    return new ExplorerSpacecraft(name);
  }
}

export class BattleshipFactory extends SpacecraftFactory {
  createSpacecraft(name: string): ISpacecraft {
    return new BattleshipSpacecraft(name);
  }
}

export class CargoFactory extends SpacecraftFactory {
  createSpacecraft(name: string): ISpacecraft {
    return new CargoSpacecraft(name);
  }
}

// Factory registry
export const factories = {
  Explorer: new ExplorerFactory(),
  Battleship: new BattleshipFactory(),
  Cargo: new CargoFactory(),
};
