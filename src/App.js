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
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Title = () => <h2>Amma Diarylo Konni Pageelu</h2>;
const Image = () => (
  <img
    src="https://images-eu.ssl-images-amazon.com/images/I/81rjyBm+UYL._AC_UL900_SR900,600_.jpg"
    alt="Amma Diarylo Konni Pageelu"
  ></img>
);
const Author = () => <h2>Ravi Mantri</h2>;

export default App;
