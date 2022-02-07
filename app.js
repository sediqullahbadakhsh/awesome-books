// Book Class: Represents a Book

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// UI Class: Handle UL tasks

class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "book 1",
        author: "John Do",
      },
      {
        title: "book 2",
        author: "John Do",
      },
    ];
    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book));
  }
  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td><a href="#" class="delete">remove</a></form></td>
    `;
    list.appendChild(row);
  }
  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }
  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
  }
}

//Strore Class: Handles Storage

//Events: Display Books

document.addEventListener("DOMContentLoaded", UI.displayBooks);

//Event: Add a Book
document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;

  const book = new Book(title, author);
  UI.addBookToList(book);
  UI.clearFields();
});

//Event: Remove A Book

document.querySelector("#book-list").addEventListener("click", (e) => {
  UI.deleteBook(e.target);
});
