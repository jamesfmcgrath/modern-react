import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const BooksContext = createContext();

const axiosUrl = 'http://172.24.0.3:3001/books/';

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get(`${axiosUrl}`);

    setBooks(response.data);
  }, []);

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`${axiosUrl}${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map(book => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = async id => {
    // eslint-disable-next-line
    const response = await axios.delete(`${axiosUrl}${id}`);

    const updatedBooks = books.filter(book => book.id !== id);

    setBooks(updatedBooks);
  };

  const createBook = async title => {
    const response = await axios.post(`${axiosUrl}`, {
      title,
    });

    const updatedBooks = [...books, response.data];

    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    fetchBooks,
    editBookById,
    deleteBookById,
    createBook,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
