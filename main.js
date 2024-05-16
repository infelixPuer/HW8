import { FictionBook, TechnicalBook, Book, User, Cart, Order } from "./hw8.js";

// Setting up the books
const humiliatedAndInsulted= new FictionBook("Humiliated and Insulted", "Fyodor Dostoevsky", "978-1-84749-045-2", 12.00, true, "novel");
const nineteenEightyFour = new FictionBook("Nineteen Eighty-Four", "George Orwell", "978-1443434973", 9.99, true, "dystopia");
const theManWhoLaughs = new FictionBook("The Man Who Laughs", "Victor Hugo", "978-1911238355", 9.95, true, "novel");
const itDoesntHurtTheDead = new FictionBook("It Doesn't Hurt The Dead", "Vasil Bykaŭ", "978-5-17-119443-7", 8.49, true, "war");
const theHitchhikersGuideToTheGalaxy = new FictionBook("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", "978-0345391803", 8.99, true, "sci-fi");
const eloquentJavaScript = new TechnicalBook("Eloquent JavaScript", "Marijn Haverbeke", "978-1593279509", 39.99, true, "programming language");
const structuredComputerOrganization = new TechnicalBook("Structured Computer Organization", "Andrew S. Tanenbaum", "978-0132916523", 233.32, true, "computer architecture");
const gameEngineArchitecture = new TechnicalBook("Game Engine Architecture", "Jason Gregory", "978-1138035454", 110.00, true, "game development");
const theCProgrammingLanguage = new TechnicalBook("The C Programming Language", "Brian W. Kernighan, Dennis M. Ritchie", 67.00, true, "programming language");

const books = [humiliatedAndInsulted, nineteenEightyFour, theManWhoLaughs, itDoesntHurtTheDead, theHitchhikersGuideToTheGalaxy, eloquentJavaScript, structuredComputerOrganization, gameEngineArchitecture, theCProgrammingLanguage];

// Setting up the users
const user1 = new User("Alexander", "alexander@example.com");
const user2 = new User("John", "john@example.com");
const user3 = new User("Konrad", "konrad@example.com");
const user4 = new User("Elena", "elena@example.com");
const user5 = new User("Michael", "michael@example.com");
const user6 = new User("Sarah", "sarah@example.com");
const user8 = new User("Tom", "tom@example.com");

// Setting up the carts
const cart1 = new Cart(user1);
const cart2 = new Cart(user2);
const cart3 = new Cart(user3);
const cart4 = new Cart(user4);
const cart5 = new Cart(user5);
const cart6 = new Cart(user6);
const cart8 = new Cart(user8);

// ******************************************************************************
// Scenario 1: Adding books to the cart, calculating total price and making order
// ******************************************************************************

// Adding books to the cart
cart1.addBook(humiliatedAndInsulted);
cart1.addBook(nineteenEightyFour);
cart1.addBook(eloquentJavaScript);

// Calculating total price
let totalPrice = 0;
const calculatedTotalPrice = cart1.calculateTotalPrice();
console.log(`Total price (using method): $${calculatedTotalPrice.toFixed(2)}`);

// ******************************************************************************
// Scenario 2: Placing an order
// ******************************************************************************

// Adding books to the cart
cart2.addBook(theHitchhikersGuideToTheGalaxy);
cart2.addBook(gameEngineArchitecture);

// User places an order
const order = user2.placeOrder(cart2);

console.log(`Order placed by ${order.user.name}`);
console.log(`Books in order:`);
order.books.forEach(book => console.log(`${book.title} by ${book.author}`));
console.log(`Total price: $${order.totalPrice.toFixed(2)}`);

// ******************************************************************************
// Scenario 3: Searching for a book in the cart
// ******************************************************************************

// Adding books to the cart
cart3.addBook(theManWhoLaughs);
cart3.addBook(structuredComputerOrganization);

// Search for a specific book
const searchTitle = "The Man Who Laughs";
const foundBook = cart3.searchForBook(cart3.books, (book) => book.title === searchTitle);

if (foundBook) console.log(`Found book: ${foundBook.title} by ${foundBook.author}`);
else console.log(`Book titled "${searchTitle}" not found in the cart.`);

// ******************************************************************************
// Scenario 4: Removing a book from the cart
// ******************************************************************************

// Adding books to the cart
cart4.addBook(itDoesntHurtTheDead);
cart4.addBook(theCProgrammingLanguage);

// Removing a book from the cart
cart4.removeBook(itDoesntHurtTheDead);

console.log(`Books in ${user4.name}'s cart after removal:`);
cart4.books.forEach(book => console.log(`${book.title} by ${book.author}`));

// ******************************************************************************
// Scenario 5: Checking book availability
// ******************************************************************************

// Adding books to the cart
cart5.addBook(eloquentJavaScript);
cart5.addBook(structuredComputerOrganization);

// Checking availability of books in the cart
cart5.books.forEach(book => {
    if (book.availability) console.log(`${book.title} is available.`);
    else console.log(`${book.title} is not available.`);
});

// ******************************************************************************
// Scenario 6: Filtering books by genre or theme
// ******************************************************************************

// Adding books to the cart
cart6.addBook(nineteenEightyFour);
cart6.addBook(gameEngineArchitecture);

// Filtering books by genre or theme
const fictionBooks = cart6.books.filter(book => book instanceof FictionBook && book.genre === "dystopia");
const technicalBooks = cart6.books.filter(book => book instanceof TechnicalBook && book.theme === "game development");

console.log(`Fiction books in ${user6.name}'s cart:`);
fictionBooks.forEach(book => console.log(`${book.title} by ${book.author}`));
console.log(`Technical books in ${user6.name}'s cart:`);
technicalBooks.forEach(book => console.log(`${book.title} by ${book.author}`));

// ******************************************************************************
// Scenario 7: Creating and viewing the order
// ******************************************************************************

// Adding books to the cart
cart8.addBook(humiliatedAndInsulted);
cart8.addBook(eloquentJavaScript);

// Creating an order
const order8 = user8.placeOrder(cart8);

// Displaying order details
console.log(`Order details for ${order8.user.name}:`);
order8.books.forEach(book => console.log(`${book.title} by ${book.author}`));
console.log(`Total price: $${order8.totalPrice.toFixed(2)}`);