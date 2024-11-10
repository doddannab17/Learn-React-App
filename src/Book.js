const Book = (props) => {
  const { imageUrl, title, author, children, id, getBookById } = props;

  const handleClickFunction = () => {
    console.log(title, id);
  };

  const handleGetBookFunction = () => {
    getBookById(id);
  };
  return (
    <article className="book">
      <span className="number">#{id}</span>
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <p>{children}</p>
      <button onClick={() => getBookById(id)}>Click Here </button>
    </article>
  );
};

export default Book;
