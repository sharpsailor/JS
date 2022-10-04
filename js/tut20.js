// console.log("This is tut20");
//Local storage
let impArray=['adrak','pyaz','bhindi'];
//add a key value pair in local storage
localStorage.setItem('Name','Harry');
localStorage.setItem('Name2','Rohan');
localStorage.setItem('sabzi',JSON.stringify(impArray));
// localStorage.clear(); clears the entire localstorage 
// localStorage.removeItem('Name'); removes the key value pair
// let name = localStorage.getItem('Name2'); // retrives local storge Item
// name = JSON.parse(localStorage.getItem('sabzi')); // retrives local storge Item
// console.log(name);
sessionStorage.setItem('Name','Harry');
sessionStorage.setItem('Name2','Rohan');
sessionStorage.setItem('sabzi',JSON.stringify(impArray));
