// console.log('This is tut10');
// const mygreet=function greet(name,instruction) {
//     let msg =`Hi this is ${name},${instruction} for all `;
//     return msg;
// }
// let val = mygreet('sharpsailor', 'Thanks a lot');
// console.log(val);
// const myObj ={
//         name:'SkillF',
//         game:function(){
//             return "GTA";
//         }
// }
// console.log(myObj.game());
// arr=['Fruits','Vegetable','Furniture'];
// arr.forEach(function(element,index,array) {
//     console.log(element,array,index);
// });
// Scope
if(1){
    var i =234;
    console.log(i);
}
console.log(i);
function ui(name) {
    i =9;
        console.log(i)
    return`This is a ${name}`;
}
console.log(ui("sharpsailor"),i);
// let is a block level scope where as var is global -->functional