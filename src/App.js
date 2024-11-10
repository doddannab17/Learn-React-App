import "./App.css";

const books = [
  {
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/81rjyBm+UYL._AC_UL900_SR900,600_.jpg",
    author: "Ravi Mantri",
    title: "Amma Diarylo Konni Pageelu",
  },
  {
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/81Dky+tD+pL._AC_UL600_SR600,400_.jpg",
    author: "Harshvardhan Saraf",
    title: "The Satvic Revolution",
  },
  {
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/81rjyBm+UYL._AC_UL900_SR900,600_.jpg",
    author: "Ravi Mantri",
    title: "Amma Diarylo Konni Pageelu",
  },
  {
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/81Dky+tD+pL._AC_UL600_SR600,400_.jpg",
    author: "Harshvardhan Saraf",
    title: "The Satvic Revolution",
  },
  {
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/81rjyBm+UYL._AC_UL900_SR900,600_.jpg",
    author: "Ravi Mantri",
    title: "Amma Diarylo Konni Pageelu",
  },
  {
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/81Dky+tD+pL._AC_UL600_SR600,400_.jpg",
    author: "Harshvardhan Saraf",
    title: "The Satvic Revolution",
  },
  {
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/81rjyBm+UYL._AC_UL900_SR900,600_.jpg",
    author: "Ravi Mantri",
    title: "Amma Diarylo Konni Pageelu",
  },
  {
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/81Dky+tD+pL._AC_UL600_SR600,400_.jpg",
    author: "Harshvardhan Saraf",
    title: "The Satvic Revolution",
  },
];

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
      {books.map((book) => {
        const { image, author, title } = book;
        return <Book imageUrl={image} bookTitle={title} author={author} />;
      })}
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
