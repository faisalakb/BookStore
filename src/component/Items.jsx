import React from 'react';
import PropTypes from 'prop-types';
import ProgressCircle from './ProgressCircle';

const Items = ({ bookList, setBookList }) => {
  const handleRemoveClick = (itemId) => {
    // Filter out the clicked item
    const updatedItems = bookList.filter((item) => item.id !== itemId);
    setBookList(updatedItems); // Update the bookList state
    localStorage.setItem('itemsData', JSON.stringify(updatedItems));
  };

  if (bookList.length === 0) {
    return <div>No items found.</div>; // Render a message when there's no data
  }

  return (
    <div className="mainItemContainer">
      <ul>
        {bookList.map((item) => (
          <li className="itemContainer" key={item.id}>
            <section className="bookInfo">
              <p>{item.type}</p>
              <h2>{item.name}</h2>
              <h5>{item.subHeading}</h5>
              <ul className="eventItem">
                <li>

                  {item.Comments}

                </li>
                <li>
                  <button
                    type="button"
                    className="removeButton"
                    onClick={() => handleRemoveClick(item.id)}
                  >
                    {item.Remove}
                  </button>
                </li>
                <li>{item.Edit}</li>
              </ul>
            </section>
            <section className="status">
              <ProgressCircle />
              <div className="percent">
                {item.percent}
                <span>&#37;</span>
              </div>
              <p className="comp">Completed</p>
            </section>
            <section className="progress">
              <p>Current Chapter</p>
              <h5>{item.chapter}</h5>
              <button type="button" className="proBtn">
                UPDATE PROGRESS
              </button>
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
};

Items.propTypes = {
  bookList: PropTypes.instanceOf(Array).isRequired,
  setBookList: PropTypes.func.isRequired, // Add the prop type for setBookList
};

export default Items;
