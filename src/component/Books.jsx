import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import Items from './Items';
import InputData1 from './InputData';
import itemsData from './itemsData.json';

const Books = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [selectedType, setSelectedType] = useState('Action');
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const storedItemsData = localStorage.getItem('itemsData');

    if (storedItemsData) {
      setBookList(JSON.parse(storedItemsData));
    } else {
      localStorage.setItem('itemsData', JSON.stringify(itemsData));
      setBookList(itemsData);
    }
  }, []);

  const handleInput = (event) => {
    setBookTitle(event.target.value);
  };

  const handleTypeSelect = (event) => {
    setSelectedType(event.target.value);
  };

  const dataSubmit = () => {
    if (bookTitle && selectedType) {
      const newBook = {
        id: uuidv4(),
        type: selectedType,
        name: bookTitle,
        subHeading: selectedType,
        Comments: 'Comments',
        Remove: 'Remove',
        Edit: 'Edit',
        percent: 0,
        chapter: 'Introduction',
      };

      const updatedData = [...bookList, newBook];
      setBookList(updatedData); // Update state with the new book

      localStorage.setItem('itemsData', JSON.stringify(updatedData));
      setBookTitle('');
      setSelectedType('');
    }
  };

  return (
    <>
      <Header />
      <Items bookList={bookList} setBookList={setBookList} />
      {/* Pass the bookList state as a prop */}
      <InputData1
        value={bookTitle}
        onChange={handleInput}
        selectedType={selectedType}
        onSelectType={handleTypeSelect}
        dataSubmit={dataSubmit}
      />
    </>
  );
};

export default Books;
