
const SingleBook = ({ book, showBtn, onClick }) => {  

  return (
    <>
      <div className="single-book">
        <div className="title">
          <b>Book title: </b>
          <span>{book.title}</span>
        </div>
        <div className="edition">
          <b>Edition Count: </b>
          <span>{book.edition_count}</span>
        </div>
        <div className="button-wrap">
          {showBtn && (
            <button className="button" onClick={onClick}>
              Add to Bookshelf
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleBook;
