const myLibrary = [];

const titleInput = document.getElementById("title");
const authorElement = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkOption = document.getElementById("check");

window.addEventListener("load", function (e) {
  populateStorage();
  const submitInput = document.getElementById("submit");
  submitInput.addEventListener("click", submit);
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

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  const title = titleInput.value.trim();
  const author = authorElement.value.trim();
  const pages = Number(pagesInput.value.trim());
  const isChecked = checkOption.checked;

  if (!title || !author || Number.isNaN(pages) || pages <= 0) {
    alert(
      "Please fill all fields and make sure book page is greater than zero!"
    );
    return;
  }

  if (!/^[A-Za-z\s]+$/.test(author) || !/^[A-Za-z\s]+$/.test(title)) {
    alert("Author and book title must contain only letters");
    return;
  }

  let book = new Book(title, author, pages, isChecked);
  myLibrary.push(book);
  render();
}

function Book(title, author, pages, isChecked) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isChecked = isChecked;
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
    titleCell.innerHTML = myLibrary[i].title;
    authorCell.innerHTML = myLibrary[i].author;
    pagesCell.innerHTML = myLibrary[i].pages;

    let readStatusBtn = document.createElement("button");
    readStatusBtn.className = "btn btn-success";
    wasReadCell.appendChild(readStatusBtn);
    readStatusBtn.innerText = myLibrary[i].isChecked ? "Yes" : "No";

    readStatusBtn.addEventListener("click", function () {
      myLibrary[i].isChecked = !myLibrary[i].isChecked;
      render();
    });

    //add delete button to every row and render again

    let removeBookBtn = document.createElement("button");

    deleteCell.appendChild(removeBookBtn);
    removeBookBtn.className = "btn btn-warning";
    removeBookBtn.innerHTML = "Delete";
    removeBookBtn.addEventListener("click", function () {
      const toast = document.createElement("div");
      toast.textContent = `You've deleted title: ${myLibrary[i].title}`;
      table.appendChild(toast);
      setTimeout(() => toast.remove(), 2000);
      myLibrary.splice(i, 1);
      render();
    });
  }
}
