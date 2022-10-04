/*
create a div and inject it into the page which contains a heading.
Whenever user clicks away(blur) .Save the note on local storage
*/
//Cretaed a new element
let divElement = document.createElement("div");
// Add text to that Created element
let val = localStorage.getItem("text");
let text;
if (val == null) {
  text = document.createTextNode("This is my element , click to edit it");
} else {
  text = document.createTextNode(val);
}
divElement.appendChild(text);
divElement.setAttribute("id", "elem");
divElement.setAttribute("class", "elem");
divElement.setAttribute(
  "style",
  "border:2px solid black; width 154px; margin:34px; padding:23px;"
);
// Grab the main Container
let container = document.querySelector(".container");
let first = document.getElementById("myFirst");
// Insert before id First
container.insertBefore(divElement, first);
console.log(divElement, container, first);
// add event Listener to the divElement
divElement.addEventListener("click", function () {
  let noTextAreas = document.getElementsByClassName("textarea").length;
  if (noTextAreas == 0) {
    let html = elem.innerHTML;
    divElement.innerHTML = ` <textarea class="textarea form-control" id="textArea" rows="3">${html}</textarea>`;
  }
  let textarea = document.getElementById("textarea");
  textarea.addEventListener("blur", function () {
    elem.innerHTML = textarea.ariaValueMax;
    localStorage.setItem("text", textarea.value);
  });
});
