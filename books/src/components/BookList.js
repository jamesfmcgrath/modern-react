import BookShow from './BookShow';
import useBooksContext from '../hooks/use-books-context';

function BookList() {
  const { books } = useBooksContext();

  const renderedBooks = books.map((book, i) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
