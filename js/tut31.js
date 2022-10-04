// console.log("This is tut31");
class Employee {
  constructor(givenName, givenExpirence, givenDivison) {
    this.name = givenName;
    this.expeirence = givenExpirence;
    this.divison = givenDivison;
  }
  slogan() {
    return `I am ${this.name} and this company is the best`;
  }
  joiningYear() {
    return 2020 - this.expeirence;
  }
  static add(a, b) {
    return a + b;
  }
}
// let harry = new Employee("Sharpsailor", 56,"Divison");
// console.log(harry);
// console.log(harry.joiningYear());
console.log(Employee.add(34, 5));
class Programmer extends Employee {
  constructor(givenName, givenExpirence, givenDivison, language, github) {
    super(givenName, givenExpirence, givenDivison);
    this.language = language;
    this.github = github;
  }
  favouriteLanguage() {
    if (this.language == "Python") {
      return "Python";
    } else {
      return "Javascript";
    }
  }
  static multiply(a, b) {
    return a * b;
  }
}
rohan = new Programmer("Rohan", 3, "Lays", "Go", "Rohan420");
console.log(rohan);
console.log(rohan.favouriteLanguage());
console.log(Programmer.multiply(5, 6));
