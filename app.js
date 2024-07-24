// class Library {
//     constructor(name) {
//         this.name = name;
//         this.books = [];
//     }
//     addPageEntry() {
//         const createEntry = document.createElement("div");
//         createEntry.classList = "add-entry";
//         createEntry.textContent = `Book Name: ${this.name}\t\t\tAuthor Name: ${this.author}
//         \nPage Count: ${this.pageCount}\t\t\tRead: ${this.read}`;
//         form.appendChild(createEntry);
//     }
// }

// class Book extends Library {
//     constructor(title, author, pageCount, read) {
//         super(title);
//         this.author = author;
//         this.pageCount = pageCount;
//         this.read = read;
//     }
// }

// const btn = document.querySelector(".add-book");
// const form = document.querySelector("#form-container");
// btn.addEventListener("click", getBookQuery);

// function getBookQuery() {
//     // let formOverlay = document.createElement("div");
//     // formOverlay.innerHTML = `
//     // <form id="books-info>
//     //     <label for="book-name">Book Name:</label>
//     //     <input type="text" id="book-name" name="book-name" required><br>
//     //     <label for="author-name">Author Name:</label>
//     //     <input type="text" id="author-name" name="author-name" require><br>
//     //     <label for="page-count">Page Count:</label>
//     //     <input type="number" id="page-count name="page-count" required><br>
//     //     <fieldset>
//     //         <legend>Have you read this book?</legend>
//     //         <label for="yes">Yes</label>
//     //         <input type="radio" id="yes" name="read-option"><br>
//     //         <label for="no">No</label>
//     //         <input type="radio" id="no" name="read-option"><br
//     //     </fieldset>
//     //     <button id="close">Submit</button>
//     // </form>
//     // `
//     let formOverlay = document.createElement("div");
//     formOverlay.innerHTML = `
//     <form id="books-info">
//         <label for="book-name">Book Name:</label>
//         <input type="text" id="book-name" name="book-name" required><br>
//         <label for="author-name">Author Name:</label>
//         <input type="text" id="author-name" name="author-name" required><br>
//         <label for="page-count">Page Count:</label>
//         <input type="number" id="page-count" name="page-count" required><br>
//         <fieldset>
//             <legend>Have you read this book?</legend>
//             <label for="yes">Yes</label>
//             <input type="radio" id="yes" name="read-option" value="yes"><br>
//             <label for="no">No</label>
//             <input type="radio" id="no" name="read-option" value="no"><br>
//         </fieldset>
//         <button type="button" id="submitBook">Submit</button>
//     </form>
//     `;
//     document.body.appendChild(formOverlay);
//     formOverlay.classList.add("show");
//     document.getElementById("submitBook").addEventListener("click", sendQuery);
// }
// function sendQuery() {
//     const bookName = document.getElementById("book-name").value;
//     const authorName = document.getElementById("author-name").value;
//     const pageCount = document.getElementById("page-count").value;
//     const read = document.querySelector('input[name="read-option"]:checked').value === 'yes';

//     const book = new Book(bookName, authorName, pageCount, read);
//     book.addPageEntry();
// }
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        this.addPageEntry(book);
    }

    addPageEntry(book) {
        const createEntry = document.createElement("div");
        createEntry.classList = "add-entry";
        createEntry.textContent = `Book Name: ${book.title}\t\t\tAuthor Name: ${book.author}\nPage Count: ${book.pageCount}\t\t\tRead: ${book.read}`;
        document.querySelector("#libraryContainer").appendChild(createEntry);
    }
}

class Book {
    constructor(title, author, pageCount, read) {
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.read = read;
    }
}

const btn = document.querySelector(".add-book");
const form = document.querySelector("#form-container");
btn.addEventListener("click", getBookQuery);

function getBookQuery() {
    let formOverlay = document.createElement("div");
    formOverlay.innerHTML = `
    <form id="books-info">
        <label for="book-name">Book Name:</label>
        <input type="text" id="book-name" name="book-name" required><br>
        <label for="author-name">Author Name:</label>
        <input type="text" id="author-name" name="author-name" required><br>
        <label for="page-count">Page Count:</label>
        <input type="number" id="page-count" name="page-count" required><br>
        <fieldset>
            <legend>Have you read this book?</legend>
            <label for="yes">Yes</label>
            <input type="radio" id="yes" name="read-option" value="yes"><br>
            <label for="no">No</label>
            <input type="radio" id="no" name="read-option" value="no"><br>
        </fieldset>
        <button type="button" id="submitBook">Submit</button>
    </form>
    `;
    document.body.appendChild(formOverlay);
    formOverlay.classList.add("show");

    document.getElementById("submitBook").addEventListener("click", sendQuery);
}

function sendQuery() {
    const bookName = document.getElementById("book-name").value;
    const authorName = document.getElementById("author-name").value;
    const pageCount = document.getElementById("page-count").value;
    const read = document.querySelector('input[name="read-option"]:checked').value === 'yes';

    const book = new Book(bookName, authorName, pageCount, read);
    myLibrary.addBook(book);

    document.querySelector(".show").remove();
}

const myLibrary = new Library('My Library');
