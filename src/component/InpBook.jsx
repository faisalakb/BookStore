import React from 'react';
import PropTypes from 'prop-types';

const InpBook = ({ value, getData, dataSubmit }) => (
  <>
    <input className="inpData" type="text" value={value} onChange={getData} />
    <button type="button" className="inpBtn" onClick={dataSubmit}>Add</button>
  </>
);

InpBook.propTypes = {
  value: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
  dataSubmit: PropTypes.func.isRequired,
};

export default InpBook;
