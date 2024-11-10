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

const BookList = () => {
  return (
    <>
      <h1>Best Selling Books</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={index} />;
        })}
      </section>
    </>
  );
};

export default App;
