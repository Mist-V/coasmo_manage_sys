import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function Documentation() {
  return (
    <div className="w-full px-4 mt-16 relative z-0">
      <div className="prose prose-sm prose-invert max-w-none">
        <Alert className="mb-8 bg-yellow-500/10 border-yellow-500/50">
          <AlertTitle className="text-yellow-500">
            Секретная документация
          </AlertTitle>
          <AlertDescription className="text-yellow-500/90">
            Эта документация доступна через ввод "docs" в поле названия корабля.
            Не показывайте эту информацию посторонним!
          </AlertDescription>
        </Alert>

        <h1>Система управления космическим флотом</h1>

        <h2>Архитектура проекта</h2>
        <p>Проект построен на современном стеке технологий:</p>
        <ul>
          <li>
            <strong>Frontend:</strong> React + TypeScript + Tailwind CSS для
            стильного и отзывчивого интерфейса
          </li>
          <li>
            <strong>Backend:</strong> Express.js + TypeScript для надежного API
          </li>
          <li>
            <strong>База данных:</strong> SQLite с Drizzle ORM для хранения
            данных о космических кораблях
          </li>
        </ul>

        <h2>Основные функции</h2>
        <div className="space-y-4">
          <Card className="bg-card/50">
            <CardContent className="pt-6">
              <h3>Управление кораблями</h3>
              <ul>
                <li>Добавление новых кораблей в флот</li>
                <li>Просмотр списка существующих кораблей</li>
                <li>Поиск кораблей по названию</li>
                <li>Секретные коды доступа к специальным функциям</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/50">
            <CardContent className="pt-6">
              <h3>Технические характеристики</h3>
              <ul>
                <li>Real-time обновления данных</li>
                <li>Защищенное API с валидацией данных</li>
                <li>Оптимизированная база данных</li>
                <li>Масштабируемая архитектура</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h2>Безопасность</h2>
        <p>Система включает несколько уровней безопасности:</p>
        <ul>
          <li>Валидация всех входящих данных</li>
          <li>Защита от SQL-инъекций через ORM</li>
          <li>Система секретных кодов для доступа к специальным функциям</li>
          <li>Логирование всех важных действий</li>
        </ul>

        <h2>API Endpoints</h2>
        <Card className="bg-card/50 mb-4">
          <CardContent className="pt-6">
            <code className="block">
              GET /api/spacecraft - Получение списка кораблей
              <br />
              POST /api/spacecraft - Добавление нового корабля
              <br />
              GET /api/spacecraft/:id - Получение информации о корабле
              <br />
              DELETE /api/spacecraft/:id - Удаление корабля
            </code>
          </CardContent>
        </Card>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-white">
            Технологический стек
          </h2>
          <Card className="w-full">
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Node.js и Express
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl text-white mb-2">
                      Архитектура Node.js
                    </h4>
                    <ul className="space-y-2 text-white/80">
                      <li>
                        • Event Loop и асинхронное программирование
                        <ul className="ml-4 mt-1">
                          <li>- Non-blocking I/O операции</li>
                          <li>- Эффективная обработка множества соединений</li>
                          <li>- Оптимизация производительности</li>
                        </ul>
                      </li>
                      <li>
                        • Модульная система
                        <ul className="ml-4 mt-1">
                          <li>- CommonJS и ES модули</li>
                          <li>- Управление зависимостями через npm</li>
                          <li>- Hot Module Replacement</li>
                        </ul>
                      </li>
                      <li>
                        • Встроенные модули
                        <ul className="ml-4 mt-1">
                          <li>- http/https для сетевых операций</li>
                          <li>- fs для работы с файлами</li>
                          <li>- crypto для шифрования</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl text-white mb-2">
                      Express Framework
                    </h4>
                    <ul className="space-y-2 text-white/80">
                      <li>
                        • Middleware система
                        <ul className="ml-4 mt-1">
                          <li>- Обработка запросов/ответов</li>
                          <li>- Аутентификация и авторизация</li>
                          <li>- Логирование и мониторинг</li>
                        </ul>
                      </li>
                      <li>
                        • Маршрутизация
                        <ul className="ml-4 mt-1">
                          <li>- REST API endpoints</li>
                          <li>- Параметры маршрутов</li>
                          <li>- Query параметры</li>
                        </ul>
                      </li>
                      <li>
                        • Интеграция с базами данных
                        <ul className="ml-4 mt-1">
                          <li>- ORM/Query builders</li>
                          <li>- Connection pools</li>
                          <li>- Транзакции</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  React и современный фронтенд
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl text-white mb-2">
                      React Core Concepts
                    </h4>
                    <ul className="space-y-2 text-white/80">
                      <li>
                        • Virtual DOM
                        <ul className="ml-4 mt-1">
                          <li>- Эффективное обновление UI</li>
                          <li>- Reconciliation алгоритм</li>
                          <li>- Батчинг обновлений</li>
                        </ul>
                      </li>
                      <li>
                        • Компонентная модель
                        <ul className="ml-4 mt-1">
                          <li>- Функциональные компоненты</li>
                          <li>- Props и состояние</li>
                          <li>- Композиция компонентов</li>
                        </ul>
                      </li>
                      <li>
                        • Хуки
                        <ul className="ml-4 mt-1">
                          <li>- useState для локального состояния</li>
                          <li>- useEffect для side-effects</li>
                          <li>- useContext для глобальных данных</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl text-white mb-2">
                      Дополнительные технологии
                    </h4>
                    <ul className="space-y-2 text-white/80">
                      <li>
                        • TypeScript
                        <ul className="ml-4 mt-1">
                          <li>- Строгая типизация</li>
                          <li>- Interface и Type</li>
                          <li>- Generics</li>
                        </ul>
                      </li>
                      <li>
                        • TanStack Query
                        <ul className="ml-4 mt-1">
                          <li>- Кэширование данных</li>
                          <li>- Автоматическая синхронизация</li>
                          <li>- Оптимистичные обновления</li>
                        </ul>
                      </li>
                      <li>
                        • Tailwind CSS
                        <ul className="ml-4 mt-1">
                          <li>- Utility-first подход</li>
                          <li>- JIT компиляция</li>
                          <li>- Кастомизация тем</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-white">
            Паттерны проектирования
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="w-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Factory Method
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl text-white mb-2">
                      Структура паттерна
                    </h4>
                    <ul className="space-y-2 text-white/80">
                      <li>
                        • Абстрактный создатель
                        <ul className="ml-4 mt-1">
                          <li>- Определяет интерфейс создания</li>
                          <li>- Содержит базовую логику</li>
                          <li>- Делегирует создание подклассам</li>
                        </ul>
                      </li>
                      <li>
                        • Конкретные создатели
                        <ul className="ml-4 mt-1">
                          <li>- ExplorerFactory для исследователей</li>
                          <li>- BattleshipFactory для крейсеров</li>
                          <li>- CargoFactory для грузовых</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl text-white mb-2">Реализация</h4>
                    <pre className="bg-purple-900/50 p-4 rounded-lg overflow-x-auto">
                      {`// Абстрактная фабрика
                      abstract class SpacecraftFactory {
                        abstract createSpacecraft(name: string): ISpacecraft;
                      
                        protected generateId(): string {
                          return crypto.randomUUID();
                        }
                      }
                      
                      // Конкретная фабрика
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
                      }`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Observer
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl text-white mb-2">
                      Компоненты паттерна
                    </h4>
                    <ul className="space-y-2 text-white/80">
                      <li>
                        • Subject (Наблюдаемый)
                        <ul className="ml-4 mt-1">
                          <li>- Хранит список наблюдателей</li>
                          <li>- Уведомляет об изменениях</li>
                          <li>- Управляет подписками</li>
                        </ul>
                      </li>
                      <li>
                        • Observer (Наблюдатель)
                        <ul className="ml-4 mt-1">
                          <li>- Подписывается на обновления</li>
                          <li>- Реагирует на изменения</li>
                          <li>- Может отписаться</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl text-white mb-2">
                      React Implementation
                    </h4>
                    <pre className="bg-purple-900/50 p-4 rounded-lg overflow-x-auto">
                      {`// Subject implementation
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
                      
                      // React component as Observer
                      function SpacecraftViewer() {
                        useEffect(() => {
                          const observer = {
                            update: (spacecraft) => {
                              setData(spacecraft);
                              updateUI();
                            }
                          };
                        
                          subject.attach(observer);
                          return () => subject.detach(observer);
                        }, []);
                      }`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-white">Игровая механика</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="w-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Система боя
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl text-white mb-2">Механика атак</h4>
                    <ul className="space-y-2 text-white/80">
                      <li>
                        • Типы урона
                        <ul className="ml-4 mt-1">
                          <li>- Базовый: 10-30 единиц</li>
                          <li>- Критический: 20-60 единиц (30%)</li>
                          <li>- Особый: зависит от типа корабля</li>
                        </ul>
                      </li>
                      <li>
                        • Модификаторы
                        <ul className="ml-4 mt-1">
                          <li>- Дистанция: -2% за 100 единиц</li>
                          <li>- Угол атаки: +15% в хвост</li>
                          <li>- Состояние щитов: -50% при активных</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl text-white mb-2">Система щитов</h4>
                    <ul className="space-y-2 text-white/80">
                      <li>
                        • Характеристики
                        <ul className="ml-4 mt-1">
                          <li>- Базовая мощность: 60-120 единиц</li>
                          <li>- Регенерация: 5 единиц/сек</li>
                          <li>- Время перезарядки: 15 секунд</li>
                        </ul>
                      </li>
                      <li>
                        • Улучшения
                        <ul className="ml-4 mt-1">
                          <li>- Усиленные щиты: +50 единиц</li>
                          <li>- Быстрая перезарядка: -5 секунд</li>
                          <li>- Авто-восстановление: +2 ед/сек</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Корабли
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl text-white mb-2">Explorer</h4>
                    <ul className="space-y-2 text-white/80">
                      <li>
                        • Характеристики
                        <ul className="ml-4 mt-1">
                          <li>- Здоровье: 100</li>
                          <li>- Щиты: 80</li>
                          <li>- Скорость: 120</li>
                        </ul>
                      </li>
                      <li>
                        • Особенности
                        <ul className="ml-4 mt-1">
                          <li>- Улучшенные сканеры</li>
                          <li>- Маскировка</li>
                          <li>- Быстрое восстановление</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl text-white mb-2">Battleship</h4>
                    <ul className="space-y-2 text-white/80">
                      <li>
                        • Характеристики
                        <ul className="ml-4 mt-1">
                          <li>- Здоровье: 150</li>
                          <li>- Щиты: 120</li>
                          <li>- Скорость: 80</li>
                        </ul>
                      </li>
                      <li>
                        • Вооружение
                        <ul className="ml-4 mt-1">
                          <li>- Тяжелые лазеры</li>
                          <li>- Ракетные установки</li>
                          <li>- Торпедные аппараты</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl text-white mb-2">Cargo</h4>
                    <ul className="space-y-2 text-white/80">
                      <li>
                        • Характеристики
                        <ul className="ml-4 mt-1">
                          <li>- Здоровье: 80</li>
                          <li>- Щиты: 60</li>
                          <li>- Грузоподъемность: 200</li>
                        </ul>
                      </li>
                      <li>
                        • Системы
                        <ul className="ml-4 mt-1">
                          <li>- Авто-погрузка</li>
                          <li>- Усиленный корпус</li>
                          <li>- Экономичные двигатели</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-white">UML Диаграммы</h2>
          <div className="grid grid-cols-1 gap-6">
            <Card className="w-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Диаграммы классов
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl text-white mb-2">
                      Factory Method Pattern
                    </h4>
                    <pre className="bg-purple-900/50 p-4 rounded-lg overflow-x-auto text-sm">
                      {`
                      ┌───────────────────────┐
                      │    SpacecraftFactory  │
                      ├───────────────────────┤
                      │ +createSpacecraft()   │
                      │ #generateId()         │
                      └─────────┬─────────────┘
                                │
                          ┌─────┴─────────────────────────────┐
                      ┌───────────────────────┐   ┌───────────────────────┐
                      │    ExplorerFactory    │   │   BattleshipFactory   │
                      ├───────────────────────┤   ├───────────────────────┤
                      │ +createSpacecraft()   │   │ +id: string           │
                      └───────────────────────┘   │ +name: string         │
                                                  │ +type: string         │
                                                  │ +health: number       │
                                                  │ +shield: number       │
                                                  └───────────────────────┘`}
                    </pre>
                  </div>

                  <div>
                    <h4 className="text-xl text-white mb-2">
                      Observer Pattern
                    </h4>
                    <pre className="bg-purple-900/50 p-4 rounded-lg overflow-x-auto text-sm">
                      {`
                      ┌────────────────────────┐
                      │   SpacecraftSubject    │
                      ├────────────────────────┤
                      │ -observers: Observer[] │
                      │ -spacecraft: Spacecraft│
                      ├────────────────────────┤
                      │ +attach(observer)      │
                      │ +detach(observer)      │
                      │ +notify()              │
                      └─────────┬──────────────┘
                      ┌────────────────────────┐
                      │       Observer         │
                      ├────────────────────────┤
                      │ +update(spacecraft)    │
                      └────────────────────────┘`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
