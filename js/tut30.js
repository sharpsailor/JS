// console.log("This is protoType 30");
const proto = {
  slogan: function () {
    return `This company is the best`;
  },
  changeName: function (newName) {
    this.name = newName;
  },
};
// This creates Harry Object
const harry = Object.create(proto);
harry.name = "Harry";
harry.role = "Programmer";
// console.log(harry);

//This also Creates harry Object

const harry1 = Object.create(proto, {
  name: { value: "harry", writable: true },
  role: { value: "Programmer" },
});
harry1.changeName = "Harry2";
// console.log(harry1);

function Employee(name, salary, experience) {
  this.name = name;
  this.salary = salary;
  this.experience = experience;
}
// Slogan
Employee.prototype.slogan = function () {
  return `This company is the best Regards,${this.name}`;
};
let harryObj = new Employee("Sharpsailor", 36546123165, 84);
console.log(harryObj);
console.log(harryObj.slogan());
function Programmer(name, salary, experience, language) {
  Employee.call(this, name, salary, experience);
  this.language = language;
}
// Inherit the protoType
Programmer.prototype = Object.create(Employee.prototype);

// Manually Set the constructor 
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer("Rohan", 2, 0, "JS");
console.log(rohan);
