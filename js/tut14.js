console.log("Welcome to tut14");
/*
1. Single elemenet selector
2. Multi elemenet selector
*/

// 1. Single element Selection
let element= document.getElementById('myFirst');
// element=element.className;
// element=element.childNodes;
// element=element.parentNode;
element.style.color='red';
element.innerHTML="Sharpsailor was here";
element.innerHTML='<b>Sharpsailor was here</b>';
console.log(element.innerHTML);
let sel =document.querySelector('#myFirst');
sel =document.querySelector('.child');
sel =document.querySelector('b');
sel =document.querySelector('h1');
sel =document.querySelector('div');
sel.style.color='green';
console.log(sel);

// 2. Multi elemenet selector
let elem = document.getElementsByClassName('child');
console.log(elem);
elem = document.getElementsByClassName('container');
console.log(elem);
for (let index = 0; index < elem.length; index++) {
    const element = elem[index];
    console.log(element);
    element.style.color='Blue';
}
// Array.from(elem).forEach(element=>{
//         console.log(element);
//         element.style.color='Blue';
// });
//collections can not be used with for each so Array.from() is used.