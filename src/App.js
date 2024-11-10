import logo from "./logo.svg";
import "./App.css";

const imageUrl =
  "https://images-eu.ssl-images-amazon.com/images/I/81rjyBm+UYL._AC_UL900_SR900,600_.jpg";
const author = "Ravi Mantri";
const bookTitle = "Amma Diarylo Konni Pageelu";

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
      <Book imageUrl={imageUrl} bookTitle={bookTitle} author={author}>
        <p>Hello Paragraph</p>
      </Book>
      <Book imageUrl={imageUrl} bookTitle={bookTitle} author={author} />
      <Book imageUrl={imageUrl} bookTitle={bookTitle} author={author} />
    </section>
  );
};

const Book = (props) => {
  const { imageUrl, bookTitle, author, children } = props;
  return (
    <article className="book">
      <img src={imageUrl} alt={bookTitle} />
      <h2>{bookTitle}</h2>
      <h4>{author}</h4>
      <p>{children}</p>
    </article>
  );
};

export default App;
