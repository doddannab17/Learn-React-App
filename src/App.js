import "./App.css";
import { books } from "./books";
import Book from "./Book";

function App() {
  return (
    <div>
      <BookList />
    </div>
  );
}

function getBookById(id) {
  const book = books.find((book) => book.id === id);
  console.log("Found the book ", book);
}
const BookList = () => {
  return (
    <>
      <h1>Best Selling Books</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={index} getBookById={getBookById} />;
        })}
      </section>
    </>
  );
};

export default App;
