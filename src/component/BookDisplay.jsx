import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import InpBook from './InpBook';
import Header from './Header';
import { addBook, removeBook } from '../redux/books/bookSlice';

const BookDisplay = () => {
  const books = useSelector((state) => state.books); // Get books from the state
  const [bookTitle, setBookTitle] = useState('');
  const dispatch = useDispatch();
  const handleInput = (event) => {
    setBookTitle(event.target.value);
  };

  const dataSubmit = () => {
    if (bookTitle) {
      const nb = {
        id: uuidv4(),
        title: bookTitle,
        author: 'Leo Tolstoy',
        category: 'Fiction',
      };
      dispatch(addBook(nb));
    }
    setBookTitle('');
  };
  const deleteBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <Header />
      <ul>
        {books.map((book) => (
          <>
            <li key={uuidv4()}>{book.title}</li>
            <button className="removeButton" type="button" onClick={() => deleteBook(book.id)}>remove</button>
          </>

        ))}
      </ul>
      <InpBook
        value={bookTitle}
        getData={handleInput}
        dataSubmit={dataSubmit}

      />
    </div>
  );
};

export default BookDisplay;
