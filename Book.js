const library = []

function Book(title, author, pages, read) {
this.title = title
this.author = author
this.pages = pages
this.read = read
if (this.read === false) {
    this.read = 'not read yet'
} else if (this.read === true) {
    this.read = 'read already'
} else {
    console.log('read already must be boolean')
}
this.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
}
}

function addBookToLibrary(book) {
    library.push(book)
    displayLibrary()
}

function displayLibrary() {
    const libraryOutput = document.getElementById('libraryOutput')
    library.forEach((book, index) => {
        const bookInfo = document.createElement('ul')
        bookInfo.innerText = `${index + 1}. ${book.info()}`
        libraryOutput.appendChild(bookInfo)
    })

    document.getElementById('myForm').addEventListener('submit', function(event){
        event.preventDefault()

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = document.getElementById('pages').value;
        const read = document.getElementById('read').checked;

        const newBook = new Book(title, author, pages, read)

        addBookToLibrary(newBook)

        document.getElementById('myForm').reset()


    })

}



const theHobbit = new Book('the Hobbit', 'J.R.R. Tolkien', 295, false)

addBookToLibrary(theHobbit)

// theHobbit.info() // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
