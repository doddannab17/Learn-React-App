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
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <p>{children}</p>
      <button onClick={handleGetBookFunction}>Click Here </button>
    </article>
  );
};

export default Book;
