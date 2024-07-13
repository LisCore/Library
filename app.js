const myLibrary = [];
const btn = document.querySelector(".add-book");
const bookList = document.querySelector(".book-list");
const formContainer = document.querySelector("#form-container");
const bookContainer = document.querySelector(".books");

function Book(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
}

function addBookToLib() {
    book.input
}
function createBookForm() {
    formContainer.innerHTML = '';
    const formHTML = `
    <form id="bookForm">
        <label for="bookName">Book Name:</label>
        <input type="text" id="bookName" name="bookName" required>
        <br>
        <label for="author">Author:</label>
        <input type="text" id="author" name="author" required>
        <br>
        <label for="pages">Number of Pages:</label>
        <input type="number" id="pages" name="pages" required>
        <br>
        <button type="submit">Submit Entry</button>
    </form>
    `;

    formContainer.innerHTML = formHTML;

    const bookForm = document.getElementById('bookForm');
    bookForm.addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit(event) {
    event.preventDefault();

    const bookName = document.getElementById('bookName').value.trim();
    const author = document.getElementById('author').value.trim();
    const pages = document.getElementById('pages').value.trim();

    if (bookName !== '' && author !== '' && pages !== '') {
        const bookEntry = document.createElement('div');
        bookEntry.classList.add('book-entry');
        bookEntry.innerHTML = `
            <p><strong>Title:</strong> ${bookName}</p>
            <p><strong>Author:</strong> ${author}</p>
            <p><strong>Pages:</strong> ${pages}</p>
        `;
        booksContainer.appendChild(bookEntry);

        formContainer.innerHTML = ''; // Clear the form container after submission
    } else {
        alert('Please fill out all fields');
    }
}
btn.addEventListener("click", createBookForm); 