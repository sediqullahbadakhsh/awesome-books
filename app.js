const booksInfo = [
    {
        title: 'Programming',
        author: 'John DO',
    },
    {
        title: 'Title 2',
        author: 'Author 2',
    },
]

function getBook(book) {
    return `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>
    <form><button>remove</button></form>
    </td>`;
}

function loadBookInfo() {
    const bookTable = document.querySelector('.book-list');
    for (let i = 0; i < booksInfo.length; i+= 1) {
        const bookData = getBook(booksInfo[i]);
        const bookRow = document.createElement('tr');
        bookRow.innerHTML = bookData;
        bookTable.appendChild(bookRow);
    };
}
loadBookInfo();


