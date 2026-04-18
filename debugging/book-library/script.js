let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  //render();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", "252", true);
    let book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      "127",
      true
    );
    myLibrary.push(book1);
    myLibrary.push(book2);
    render();
  }
}

const bookTitle = document.getElementById("title");
const authorOfBook = document.getElementById("author");
const NoOfpages = document.getElementById("pages");
const readBook = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  if (
    bookTitle.value.trim() === "" ||
    NoOfpages.value.trim() === "" ||
    authorOfBook.value.trim() === ""
  ) {
    alert("Please fill all fields!");
    return false;
  }

  if (
    !/^[A-Za-z\s]+$/.test(authorOfBook.value) ||
    !/^[A-Za-z\s]+$/.test(bookTitle.value)
  ) {
    alert("Author  and book title must contain only letters");
    return false;
  } else {
    let book = new Book(
      bookTitle.value,
      authorOfBook.value,
      NoOfpages.value,
      readBook.checked
    );
    myLibrary.push(book);
    render();
  }
}

const submitInput = document.getElementById("submit");
submitInput.addEventListener("click", submit);

function Book(bookTitle, authorOfBook, NoOfpages, readBook) {
  this.bookTitle = bookTitle;
  this.authorOfBook = authorOfBook;
  this.NoOfpages = NoOfpages;
  this.readBook = readBook;
}

function render() {
  let table = document.getElementById("display");
  let rowsNumber = table.rows.length;
  //delete old table
  for (let n = rowsNumber - 1; n >= 1; n--) {
    table.deleteRow(n);
  }
  //insert updated row and cells
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = table.insertRow(1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);
    titleCell.innerHTML = myLibrary[i].bookTitle;
    authorCell.innerHTML = myLibrary[i].authorOfBook;
    pagesCell.innerHTML = myLibrary[i].NoOfpages;

    let changeBtn = document.createElement("button");
    changeBtn.id = i;
    changeBtn.className = "btn btn-success";
    wasReadCell.appendChild(changeBtn);
    changeBtn.textContent = myLibrary[i].readBook ? "Yes" : "No";

    changeBtn.addEventListener("click", function () {
      myLibrary[i].readBook = !myLibrary[i].readBook;
      render();
    });

    //add delete button to every row and render again

    let delButton = document.createElement("button");
    //delButton.id = i;

    deleteCell.appendChild(delButton);
    delButton.className = "btn btn-warning";
    delButton.innerHTML = "Delete";
    delButton.addEventListener("click", function () {
      const toast = document.createElement("div");
      toast.textContent = `You've deleted title: ${myLibrary[i].bookTitle}`;
      table.appendChild(toast);
      setTimeout(() => toast.remove(), 2000);
      myLibrary.splice(i, 1);
      render();
    });
  }
}
