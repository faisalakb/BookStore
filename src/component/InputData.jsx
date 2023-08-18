import React from 'react';
import PropTypes from 'prop-types';

export const InputData = ({
  value, onChange, selectedType, onSelectType, dataSubmit,
}) => (
  <>
    <h2 className="inpHeading">Add New Book</h2>
    <div className="inputContainer">
      <input className="inpData" type="text" value={value} onChange={onChange} />
      <form>
        <select name="color" id="color" value={selectedType} onChange={onSelectType}>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
      </form>
      <button className="inpBtn" onClick={dataSubmit} type="button">Add Book</button>
    </div>
  </>
);

InputData.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  selectedType: PropTypes.string.isRequired,
  onSelectType: PropTypes.func.isRequired,
  dataSubmit: PropTypes.func.isRequired,
};

export default InputData;
