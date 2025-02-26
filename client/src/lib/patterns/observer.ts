import type { Spacecraft } from "@shared/schema";

export interface Observer {
  update(spacecraft: Spacecraft): void;
}

export class SpacecraftSubject {
  private observers: Observer[] = [];
  private spacecraft: Spacecraft | null = null;

  attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (!isExist) {
      this.observers.push(observer);
    }
  }

  detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex !== -1) {
      this.observers.splice(observerIndex, 1);
    }
  }

  notify(): void {
    if (!this.spacecraft) return;
    for (const observer of this.observers) {
      observer.update(this.spacecraft);
    }
  }

  setSpacecraft(spacecraft: Spacecraft): void {
    this.spacecraft = spacecraft;
    this.notify();
  }
}

export const spacecraftSubject = new SpacecraftSubject();
