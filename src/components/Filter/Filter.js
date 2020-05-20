import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <>
    <label className={styles.searchInput}> Find contacts by name </label>
    <input
      className={styles.inputName}
      value={value}
      onChange={onChange}></input>
  </>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default Filter;
