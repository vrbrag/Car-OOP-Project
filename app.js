// Part ONE
class Vehicle {
   constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
   }
   honk() {
      return "Beep"
   };
   toString() {
      return `This vehicle is a ${this.make} ${this.model} from ${this.year}`
   };
}
let myFirstVehicle = new Vehicle('Honda', 'Pilot', 2005)
myFirstVehicle.honk()
myFirstVehicle.toString()


// Part TWO
class Car extends Vehicle {
   constructor(make, model, year) {
      super(make, model, year);
      this.numWheels = 4
   }
}
let myFirstCar = new Car('Toyota', 'Corolla', 2005)
myFirstCar.toString()
myFirstCar.honk()
myFirstCar.numWheels


// Part THREE
class Motorcycle extends Vehicle {
   constructor(make, model, year) {
      super(make, model, year)
      this.numWheels = 2
   }
   revEngine() {
      return "VROOM!"
   }
}
let myFirstMotorcycle = new Motorcycle('Honda', 'Nighthawk', 2000)
myFirstMotorcycle.numWheels
myFirstMotorcycle.revEngine()
myFirstMotorcycle.honk()


// Part FOUR
class Garage {
   constructor(capacity) {
      this.vehicles = []; // an array of vehicles
      this.capacity = capacity; // number indicating how many vehicles fit in the garage
   }
   add(newVehicle) {
      if (!(newVehicle instanceof Vehicle)) {
         return "Only vehicles are allowed in here"
      }
      if (this.vehicles.length >= this.capacity) {
         return "Sorry, we're full"
      }
      this.vehicles.push(newVehicle)
      return 'Vehicle added!'
   }
}
let garage = new Garage(2);
garage.vehicles; // []
garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
garage.vehicles; // [Car]
garage.add("Taco"); // "Only vehicles are allowed in here!"

garage.add(new Motorcycle("Honda", "Nighthawk", 2000)); // "Vehicle added!"
garage.vehicles; // [Car, Motorcycle]
garage.add(new Motorcycle("Honda", "Nighthawk", 2001)); // "Sorry we're full"
