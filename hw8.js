// The Book class is responsible for holding information about single Book entity
export class Book {
    title;
    author;
    isbn;
    price;
    availability;

    constructor(title, author, isbn, price, availability) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.price = price;
        this.availability = availability;
    }
}

// The FictionBook class is extending the Book class, while adding new public property - genre
export class FictionBook extends Book {
    genre;

    constructor(title, author, isbn, price, availability, genre) {
        super(title, author, isbn, price, availability);
        this.genre = genre;
    }
}

// The TechnicalBook class is extending the Book class, while adding new public property - theme
export class TechnicalBook extends Book {
    theme;

    constructor(title, author, isbn, price, availability, theme) {
        super(title, author, isbn, price, availability);
        this.theme = theme;
    }
}

// The User class is responsible for:
// 1. Holding information about single User entity
// 2. Creating the order by passing entity of the Cart class
export class User {
    name;
    email;

    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.uuid = uuidv4();
    }

    placeOrder(cart) {
        return cart.createOrder();
    }
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
        .replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
}

// The Cart class is responsible for holding information:
// 1. About the array of the Books, that User added
// 2. About the User for whom the Cart is created
//
// The Cart class is used to:
// 1. Add books
// 2. Remove books
// 3. Search the book
// 4. Calculate total price of the books in the cart
// 5. Creating an order
export class Cart {
    books;
    #user;

    constructor(user) {
        this.books = [];
        this.#user = user;
    }

    // The method for adding a single book to the array of the books in the Cart class
    addBook(book) {
        this.books.push(book);
    }

    // The method for removing a single book from the array of the books in the Cart class
    removeBook(book) {
        this.books.slice(this.books.indexOf(book), 1);
    }

    // The method for searching a book which is accepting a callback function
    // The callback function is used to decide on what criteria the book must be searched
    searchForBook(books, callback) {
        return books.find(book => callback(book));
    }

    // The method for calculating total price of the books in the books array and returning this value
    calculateTotalPrice() {
        let totalPrice = 0.0;
        return this.books.forEach(book => totalPrice += book.price);
    }

    // The method for creating an order based on the user, the current books in the books array and a total price of the
    // books
    createOrder() {
        return new Order(this.#user, this.books, this.calculateTotalPrice());
    }
}

// The Order class is responsible for holding information about:
// 1. The user, who was ordered the books
// 2. The books, which was ordered
// 3. The total price of the ordered books
export class Order {
    user;
    books;
    totalPrice;

    constructor(user, books, totalPrice) {
        this.user = user;
        this.books = books;
        this.totalPrice = totalPrice;
    }
}