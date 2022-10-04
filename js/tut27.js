// console.log("This is tut 27");
let car = {
  name: "Maruti 800",
  topSpeed: 89,
  run: function () {
    console.log("Car is running");
  },
};
// console.log(car)
//Already seen Constructors
// car.run();
// new Date();
function GeneralCar(givenName, givenSpeed) {
  this.name = givenName;
  this.topSpeed = givenSpeed;
  this.run = function () {
    console.log(`${this.name} is running`);
  };
  this.analyze = function () {
    console.log(
      `This car is slower by ${200 - this.topSpeed}km/hr than mercedes `
    );
  };
}
car1 = new GeneralCar("Nissan", 180); 
car2 = new GeneralCar("Alto", 80);
car3 = new GeneralCar("Mercedes", 200);
console.log(car1, car2, car3);
