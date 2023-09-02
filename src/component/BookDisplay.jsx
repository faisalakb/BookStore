import React, { useState, useEffect } from 'react';
import { v4 as uuid4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { fetchBooks, addBookdata, removeBookdata } from '../redux/books/bookSlice';
import Header from './Header';
import InpBook from './InpBook';
import 'react-circular-progressbar/dist/styles.css';

const BookDisplay = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const [bookTitle, setBookTitle] = useState('Book title');
  const [selectedType, setSelectedType] = useState('Category');

  const bookChapters = ['Chapter 17', 'Chapter 3: A Lesson Learned', 'Introduction', 'Chapter 11', 'Chapter 7: Web Programming'];

  const getRandomChapter = () => {
    const randomIndex = Math.floor(Math.random() * bookChapters.length);
    return bookChapters[randomIndex];
  };

  const getRandomNumber = () => {
    const randomIndex = Math.floor(Math.random() * 100);
    return randomIndex;
  };
  const percentage = getRandomNumber();

  const handleTypeSelect = (event) => {
    setSelectedType(event.target.value);
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleInput = (event) => {
    setBookTitle(event.target.value);
  };

  const dataSubmit = () => {
    if (bookTitle && selectedType) {
      const newBook = {
        item_id: uuid4(),
        title: bookTitle,
        author: 'Leo Tolstoy',
        category: selectedType,
      };

      dispatch(addBookdata(newBook))
        .then(() => {
          setBookTitle('');
          setSelectedType('');
          dispatch(fetchBooks());
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
      <Header />
      {userState.isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="container">
          {Object.keys(userState.data).map((bookId) => (
            <div key={bookId}>
              <ul>
                {userState.data[bookId].map((book) => (
                  <li className="itemContainer" key={bookId}>
                    <span className="bookInfo">
                      <span className="bookData">
                        <span className="categ">{book.category}</span>
                        <span className="bookTitle">{book.title}</span>
                        <span className="bookAuthor">{book.author}</span>
                      </span>
                      <ul className="eventItem">
                        <li>Comments</li>
                        <div className="Line-2" />
                        <li>
                          <button
                            className="removeButton"
                            type="button"
                            onClick={() => deleteBook(bookId)}
                          >
                            Remove
                          </button>
                        </li>
                        <div className="Line-2" />
                        <li>Edit</li>
                      </ul>
                    </span>
                    <span className="status">
                      <CircularProgressbar className="progressCircle" value={percentage} />
                      <div className="percent">
                        {getRandomNumber()}
                        <span>&#37;</span>
                      </div>
                      <span className="comp">Completed</span>
                    </span>
                    <span className="Line-3" />
                    <span className="progress">
                      <span className="cc">Current Chapter</span>
                      <span className="rc">{getRandomChapter()}</span>
                      <button type="button" className="proBtn">
                        UPDATE PROGRESS
                      </button>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="Line" />
          <InpBook
            value={bookTitle}
            getData={handleInput}
            selectedType={selectedType}
            onSelectType={handleTypeSelect}
            dataSubmit={dataSubmit}
          />
        </div>
      )}
    </div>
  );
};

export default BookDisplay;
