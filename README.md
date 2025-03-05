📚 API Requests for Fetching Books

🔍 Get all books
Fetch the complete list of books:
GET http://localhost:3000/books

📄 Pagination
To fetch books in pages, use _page and _limit.
Example: Get the first 5 books
GET http://localhost:3000/books?_page=1&_limit=5

Example: Get the second page (next 5 books)
GET http://localhost:3000/books?_page=2&_limit=5

🎯 Get a single book by ID
Fetch full information about a specific book:

GET http://localhost:3000/books/1
Replace 1 with the book ID you need.

🎭 Filter books by genre
Fetch books based on genre (e.g., Fantasy):

GET http://localhost:3000/books?genre=Fantasy
🔎 Search for books by title
Find books that match a search query:

GET http://localhost:3000/books?title_like=Harry
📌 This will return books with "Harry" in the title (e.g., Harry Potter).
