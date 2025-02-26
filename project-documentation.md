
# Космический Флот - Документация проекта

## Обзор проекта
Веб-приложение для управления космическим флотом с возможностями создания, просмотра и управления космическими кораблями различных типов.

## Технический стек
- Frontend: React + TypeScript + Tailwind CSS
- Backend: Express.js + TypeScript
- База данных: SQLite с Drizzle ORM
- UI компоненты: Shadcn/ui

## Архитектура

### Frontend (client/src/)
- Компонентная структура React
- Использование TypeScript для типобезопасности
- Tailwind CSS для стилизации
- Компоненты UI из библиотеки shadcn/ui

### Backend (server/)
- Express.js сервер
- REST API endpoints
- SQLite база данных
- Drizzle ORM для работы с БД

## Типы кораблей

### Explorer
- Здоровье: 100
- Щиты: 80
- Скорость: 120
- Особенности:
  - Улучшенные сканеры
  - Маскировка
  - Быстрое восстановление

### Battleship
- Здоровье: 150
- Щиты: 120
- Скорость: 80
- Вооружение:
  - Тяжелые лазеры
  - Ракетные установки
  - Торпедные аппараты

### Cargo
- Здоровье: 80
- Щиты: 60
- Грузоподъемность: 200
- Системы:
  - Авто-погрузка
  - Усиленный корпус
  - Экономичные двигатели

## Боевая система

### Механика атак
- Базовый урон: 10-30 единиц
- Критический урон: 20-60 единиц (30% шанс)
- Модификаторы:
  - Дистанция: -2% за 100 единиц
  - Угол атаки: +15% в хвост
  - Состояние щитов: -50% при активных

### Система щитов
- Базовая мощность: 60-120 единиц
- Регенерация: 5 единиц/сек
- Время перезарядки: 15 секунд
- Улучшения:
  - Усиленные щиты: +50 единиц
  - Быстрая перезарядка: -5 секунд
  - Авто-восстановление: +2 ед/сек

## Паттерны проектирования

### Factory Method
Используется для создания различных типов космических кораблей.
```typescript
abstract class SpacecraftFactory {
  abstract createSpacecraft(name: string): ISpacecraft;
  protected generateId(): string {
    return crypto.randomUUID();
  }
}

class ExplorerFactory extends SpacecraftFactory {
  createSpacecraft(name: string): ISpacecraft {
    return {
      id: this.generateId(),
      name,
      type: 'explorer',
      health: 100,
      shield: 80
    };
  }
}
```

### Observer
Используется для отслеживания состояния кораблей.
```typescript
class SpacecraftSubject {
  private observers: Observer[] = [];
  private spacecraft: Spacecraft | null = null;

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this.spacecraft);
    }
  }
}
```

## API Endpoints
- GET /api/spacecraft - Получение списка кораблей
- POST /api/spacecraft - Добавление нового корабля
- GET /api/spacecraft/:id - Получение информации о корабле
- DELETE /api/spacecraft/:id - Удаление корабля

## Секретные функции
- Доступ к документации через код "docs"
- Расширенные возможности управления через специальные коды
