console.log("Ajax");
let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);
function buttonClickHandler() {
  console.log("You have clicked fetch button");
  // Instantiate an XHR object
  const xhr = new XMLHttpRequest();
  // Open the object
  //   xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
  //  USE this for POST request
  xhr.open("POST", "	https://dummy.restapiexample.com/api/v1/create", true);
  xhr.getResponseHeader("Content-type", "application/json");

  //   What to do on Progress
  xhr.onprogress = function () {
    console.log("on progress");
  };
  //   xhr.onreadystatechange = function () {
  //     console.log("ready state :", xhr.readyState);
  //   };
  //   What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.log("Some error occured");
    }
  };
  //   send the request
  params = `{"name":"test","salary":"123","age":"23"}`;
  xhr.send(params);
  console.log("We are Done");
}

let popBtn = document.getElementById("popBtn");
popBtn.addEventListener("click", popHandler);

function popHandler() {
  console.log("You have clicked the pop handler");

  // Instantiate an xhr object
  const xhr = new XMLHttpRequest();

  // Open the object
  xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);

  // What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText);
      console.log(obj);
      let list = document.getElementById("list");
      str = "";
      for (key in obj) {
        str += `<li>${obj[key].employee_name} </li>`;
      }
      list.innerHTML = str;
    } else {
      console.log("Some error occured");
    }
  };

  // send the request
  xhr.send();
  console.log("We are done fetching employees!");
}
