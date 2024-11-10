import "./App.css";

const books = [
  {
    imageUrl:
      "https://images-eu.ssl-images-amazon.com/images/I/81rjyBm+UYL._AC_UL900_SR900,600_.jpg",
    author: "Ravi Mantri",
    title: "Amma Diarylo Konni Pageelu",
  },
  {
    imageUrl:
      "https://images-eu.ssl-images-amazon.com/images/I/81Dky+tD+pL._AC_UL600_SR600,400_.jpg",
    author: "Harshvardhan Saraf",
    title: "The Satvic Revolution",
  },
  {
    imageUrl:
      "https://images-eu.ssl-images-amazon.com/images/I/81rjyBm+UYL._AC_UL900_SR900,600_.jpg",
    author: "Ravi Mantri",
    title: "Amma Diarylo Konni Pageelu",
  },
  {
    imageUrl:
      "https://images-eu.ssl-images-amazon.com/images/I/81Dky+tD+pL._AC_UL600_SR600,400_.jpg",
    author: "Harshvardhan Saraf",
    title: "The Satvic Revolution",
  },
  {
    imageUrl:
      "https://images-eu.ssl-images-amazon.com/images/I/81rjyBm+UYL._AC_UL900_SR900,600_.jpg",
    author: "Ravi Mantri",
    title: "Amma Diarylo Konni Pageelu",
  },
  {
    imageUrl:
      "https://images-eu.ssl-images-amazon.com/images/I/81Dky+tD+pL._AC_UL600_SR600,400_.jpg",
    author: "Harshvardhan Saraf",
    title: "The Satvic Revolution",
  },
  {
    imageUrl:
      "https://images-eu.ssl-images-amazon.com/images/I/81rjyBm+UYL._AC_UL900_SR900,600_.jpg",
    author: "Ravi Mantri",
    title: "Amma Diarylo Konni Pageelu",
  },
  {
    imageUrl:
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
      {books.map((book, index) => {
        return <Book {...book} key={index} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { imageUrl, title, author, children } = props;
  return (
    <article className="book">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <p>{children}</p>
    </article>
  );
};

export default App;
