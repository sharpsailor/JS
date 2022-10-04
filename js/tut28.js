// console.log("tut 28");
// Object Literal : object.protoType
let obj = {
  name: "Sharpsailor",
  channel: " Tech With Shrapsailor ",
  address: "Noida",
};
console.log(obj);
function Obj(givenName) {
  this.name = givenName;
}
Obj.prototype.getName = function () {
  return this.name;
};
let obj2 = new Obj("Harry");
console.log(obj2);
// Object Prototype