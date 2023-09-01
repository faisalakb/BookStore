import React, { useState, useEffect } from 'react';
import { v4 as uuid4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, addBookdata, removeBookdata } from '../redux/books/bookSlice';
import InpBook from './InpBook';

const BookDisplay = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const [bookTitle, setBookTitle] = useState('');

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleInput = (event) => {
    setBookTitle(event.target.value);
  };

  const dataSubmit = () => {
    if (bookTitle) {
      const newBook = {
        item_id: uuid4(),
        title: bookTitle,
        author: 'Leo Tolstoy',
        category: 'Fiction',
      };

      // Dispatch addBookdata and handle the fetchBooks action in the .then() block
      dispatch(addBookdata(newBook))
        .then(() => {
          setBookTitle('');
          dispatch(fetchBooks()); // Fetch the updated list of books
        })
        .catch((error) => {
          console.error('Error adding book:', error);
        });
    }
  };

  const deleteBook = (itemId) => {
    dispatch(removeBookdata(itemId))
      .then(() => {
        dispatch(fetchBooks()); // Fetch the updated list of books
      })
      .catch((error) => {
        console.error('Error adding book:', error);
      });
  };

  return (
    <div>
      <h1>Book Display</h1>
      {userState.isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <div>
          {Object.keys(userState.data).map((bookId) => (
            <div key={bookId}>
              <h2>
                Books with ID:
                {bookId}
              </h2>
              <ul>
                {userState.data[bookId].map((book) => (
                  <li key={bookId}>
                    {book.title}
                    -
                    {book.category}
                    <button
                      className="removeButton"
                      type="button"
                      onClick={() => deleteBook(bookId)}
                    >
                      remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <InpBook value={bookTitle} getData={handleInput} dataSubmit={dataSubmit} />
        </div>
      )}
    </div>
  );
};

export default BookDisplay;
