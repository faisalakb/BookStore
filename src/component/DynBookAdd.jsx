import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import itemsData from './itemsData.json';

const itemsDataString = JSON.stringify(itemsData);

const DynBookAdd = ({ bookList }) => {
  useEffect(() => {
    localStorage.setItem('itemsData', itemsDataString);
  }, []);

  return (
    <div className="bookList">
      <h2>Book List data</h2>
      <ul>
        {bookList.map((book) => (
          <li key={book.id}>
            <p>{book.title}</p>
            <p>{book.type}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

DynBookAdd.propTypes = {
  bookList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default DynBookAdd;
