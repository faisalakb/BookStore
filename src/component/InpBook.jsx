import React from 'react';
import PropTypes from 'prop-types';

const InpBook = ({
  value, getData, selectedType, onSelectType, dataSubmit,
}) => (
  <div className="MainInp">
    <div className="inpHeading">Add New Book</div>
    <div className="inputContainer">
      <input className="inpData" type="text" value={value} onChange={getData} />
      <form className="cateSelect">
        <select name="color" id="color" value={selectedType} onChange={onSelectType}>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
      </form>
      <button type="button" className="inpBtn" onClick={dataSubmit}>ADD BOOK</button>
    </div>
  </div>
);

InpBook.propTypes = {
  value: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
  selectedType: PropTypes.string.isRequired,
  onSelectType: PropTypes.func.isRequired,
  dataSubmit: PropTypes.func.isRequired,
};

export default InpBook;
