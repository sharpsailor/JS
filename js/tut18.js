console.log("This is tut 18");
// let btn =document.getElementById('btn');
// btn.addEventListener('click',func1);
// btn.addEventListener('dblclick',func2);   
// btn.addEventListener('mousedown',func3);   
// function func2(e) {
//     console.log("Thanks its a double Click ",e);
//     e.preventDefault();
// }
// function func1(e) {
//     // console.log("Thanks",e);
//     e.preventDefault();
// }
// function func3(e) {
//     console.log("Thanks its a mouse click ",e);
//     e.preventDefault();
// }
// document.querySelector('.no').addEventListener('mouseenter',function(){
//     console.log("You entered no");
// })
// document.querySelector('.no').addEventListener('mouseleave',function(){
//     console.log("You exited");
// })
document.querySelector('.container').addEventListener('mousemove',function(e){
    console.log(e.offsetX,e.offsetY);
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},+150)`;
    console.log("You entered mousemove");
})
// document.querySelector('.no').addEventListener('mouseleave',function(){
//     console.log("You exited");
// })