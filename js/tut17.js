console.log("Thi is tut 17");
// events
// let variable;
document.getElementById("heading").addEventListener("click", function (e) {
  console.log("You have clicked the heading");
  variable = e.target;
  variable = e.target.className;
  variable = e.target.classList;
  variable = e.target.id;
  variable = e.offsetX;
  variable = e.offsetY;
  variable = e.clientX;
  variable = e.clientY;
  console.log(e);
  console.log(variable);
  // location.href='//codewithharry.com'
});
