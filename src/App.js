import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <BookList />
    </div>
  );
}

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  const imageUrl =
    "https://images-eu.ssl-images-amazon.com/images/I/81rjyBm+UYL._AC_UL900_SR900,600_.jpg";
  const author = "Ravi Mantri";
  const bookTitle = "Amma Diarylo Konni Pageelu";
  return (
    <div className="book">
      <img src={imageUrl} alt={bookTitle} />
      <h2>{bookTitle}</h2>
      <h4>{author}</h4>
    </div>
  );
};

export default App;
