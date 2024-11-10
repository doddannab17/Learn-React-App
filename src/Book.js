const Book = (props) => {
  const { imageUrl, title, author, children, key } = props;

  const handleClickFunction = () => {
    console.log(title, key);
  };
  return (
    <article className="book">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <p>{children}</p>
      <button onClick={handleClickFunction}>Click Here </button>
    </article>
  );
};

export default Book;
