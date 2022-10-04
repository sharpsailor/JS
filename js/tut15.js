// console.log("This is tut15")
let cont = document.querySelector(".no");
cont = document.querySelector(".container");
let nodeName = cont.childNodes[2].nodeName;
let nodeType = cont.childNodes[2].nodeType;
// console.log(nodeType);
// console.log(nodeName);
// 1. element
// 2. Attributes
// 3.Attributes
// 8. Comment
// 9. document
// 10. doctype
// console.log(cont.childNodes);//dont use it
// console.log(cont.children);// use this
let container = document.querySelector("div.container");
console.log(container.children);
console.log(container.children[1].children);
console.log(container.children[1].children[0].children);
console.log(container.firstChild);
console.log(container.firstElementChild);
