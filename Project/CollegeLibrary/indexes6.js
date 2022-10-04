console.log("This is es6 version");
class Book {
  constructor(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
  }
}

class Display {
  add(book) {
    console.log("Adding to UI");
    let tableBody = document.getElementById("tableBody");
    let uiString = `<tr>
                  <td>${book.name}</td>
                  <td>${book.author}</td>
                  <td>${book.type}</td>
                  </tr>`;
    tableBody.innerHTML += uiString;
  }
  clear() {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
  }
  validate(book) {
    if (book.name.length < 2 || book.author.length < 2) {
      return false;
    } else {
      return true;
    }
  }
  show(type, displayMessage) {
    let message = document.getElementById("message");
    message.innerHTML = ` <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                              <strong>Message: </strong> ${displayMessage}
                              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                              </button>
                          </div>`;
    setTimeout(function () {
      message.innerHTML = "";
    }, 1500);
  }
}
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  console.log("You have submitted library Form");
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let type;
  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let breeding = document.getElementById("breeding");
  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (breeding.checked) {
    type = breeding.value;
  }
  let book = new Book(name, author, type);
  console.log(book);
  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("Sucess", ` Your book has been added`);
  } else {
    // Show Error to the user
    display.show("danger", ` Sorry Your book  cannot be added`);
  }
  e.preventDefault();
}
