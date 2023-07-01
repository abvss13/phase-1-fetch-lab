function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books") // Fetch the list of books from the API
    .then((resp) => resp.json()) // Extract the JSON data from the response
    .then((json) => renderBooks(json)); // Call the renderBooks() function with the JSON data
}

function renderBooks(books) {
  const main = document.querySelector('main'); // Get the <main> element from the DOM
  books.forEach(book => {
    const h2 = document.createElement('h2'); // Create an <h2> element for each book
    h2.innerHTML = book.name; // Set the book title as the content of the <h2> element
    main.appendChild(h2); // Append the <h2> element to the <main> element in the DOM
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // When the DOM is fully loaded, execute the fetchBooks() function
  fetchBooks();
});
