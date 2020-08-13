{
  class Vehicle {
    constructor(color, name, mark, model) {
      this.color = color || DEFAULT_COLOR;
      this.name = name || 'Моё транспортное средство';
      this.vehicle = 'Это транспортное средство';
      this.fuel = 'Стандартное для этого типа транспорта';
      this.mark = mark || 'Популярная марка';
      this.model = model || 'Популярная модель';
    }

    startEngine() {
      alert('Двигатель запущен');
    }
    startMoving() {
      alert('Начинаем движение');
    }
    refuel() {
      alert(`Заправляем топливом: \"${this.fuel}\".`);
    }
    useVehicleHorn() {
      alert('Сигналим');
    }
    getName() {
      alert(`${this.vehicle} назвается: \"${this.name}\".`);
    }
    getColor() {
      alert(`${this.vehicle} имеет основной цвет: \"${this.color.name}\".`);
    }
    getModel() {
      alert(`Марка: \"${this.mark}\".\nМодель: \"${this.model}\".`);
    }
  }

  // Автомобиль

  class Automobile extends Vehicle {
    constructor(color, name) {
      super(...arguments);
      this.fuel = 'Дизель';
    }

    startMoving() {
      alert('Поехали');
    }
  }

  class Car extends Automobile {
    constructor(color, name, mark, model) {
      super(...arguments);
      this.vehicle = 'Этот автомобиль';
      this.fuel = 'Бензин';
    }
  }

  class Truck extends Automobile {
    constructor(color, name, mark, model) {
      super(...arguments);
      this.vehicle = 'Этот грузовик';
    }
  }

  class Bus extends Automobile {
    constructor(color, name, mark, model) {
      super(...arguments);
      this.vehicle = 'Этот автобус';
    }
  }

  // Самолёт

  class Airplane extends Vehicle {
    constructor(color, name, mark, model) {
      super(...arguments);
      this.fuel = 'Авиатопливо';
    }

    startMoving() {
      alert('Полетели');
    }
    useVehicleHorn() {
      alert('Упс...');
    }
  }

  class Airliner extends Airplane {
    constructor(color, name, mark, model) {
      super(...arguments);
      this.vehicle = 'Этот самолёт';
    }
  }

  class CargoPlane extends Airplane {
    constructor(color, name, mark, model) {
      super(...arguments);
      this.vehicle = 'Этот грузовой самолёт';
    }
  }

  // Корабль

  class Ship extends Vehicle {
    constructor(color, name, shipClass) {
      super(...arguments);
      this.fuel = 'Судовой дизель';
      this.shipClass = shipClass;
    }
    startMoving() {
      alert('Поплыли');
    }
    getModel() {
      alert(`Класс судна: \"${this.shipClass}\".`)
    }
  }

  class Liner extends Ship {
    constructor(color, name, shipClass) {
      super(...arguments);
      this.vehicle = 'Этот круизный лайнер';
    }
  }

  class CargoShip extends Ship {
    constructor(color, name, shipClass) {
      super(...arguments);
      this.vehicle = 'Это грузовое судно';
    }
  }


  // Generation

  window.getNewVehicle = (args = null, type = null) => {
    let color, name, mark, model;
    if (args) {
      color = args.color;
      name = args.name;
      mark = args.mark;
      model = args.model;
    }

    switch (type) {
      case 'car': return new Car(color, name, mark, model);
      case 'truck': return new Truck(color, name, mark, model);
      case 'bus': return new Bus(color, name, mark, model);
      case 'airliner': return new Airliner(color, name, mark, model);
      case 'cargoPlane': return new CargoPlane(color, name, mark, model);
      case 'liner': return new Liner(color, name, model);
      case 'cargoShip': return new CargoShip(color, name, model);
      default: return new Vehicle();
    }
  };
}