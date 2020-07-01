import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

export default function Select(props) {
  const { data, handleChange } = props;

  return (
    <select name="select" onChange={(e) => handleChange(e.target.value)}>
      {data.map((el) => (
        <option value={el.value}>{el.value}</option>
      ))}
    </select>
  );
}

Select.defaultProps = {
  data: [],
  handleChange: () => {},
};

Select.propTypes = {
  data: PropTypes.array,
  handleChange: PropTypes.func,
};
