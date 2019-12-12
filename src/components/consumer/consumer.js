import React from 'react';
import PropTypes from 'prop-types';
import * as classes from './consumer.module.scss';

function Consumer({ id, name, date, total, spent, left }) {
  return (
    <div className={classes.outer}>
      <div>
        <span className={classes.label}>Company Name : </span>
        <span>{name}</span>
      </div>
      <div>
        <span className={classes.label}>Date of a first purchase : </span>
        <span>{date}</span>
      </div>
      <div>
        <span className={classes.label}>Total budget : </span>
        <span>{total}</span>
      </div>
      <div>
        <span className={classes.label}>Budget spent : </span>
        <span>{spent}</span>
      </div>
      <div>
        <span className={classes.label}>Budget left : </span>
        <span>{left}</span>
      </div>
    </div>
  );
}

Consumer.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  date: PropTypes.string,
  total: PropTypes.string,
  spent: PropTypes.string,
  left: PropTypes.string
};

Consumer.defaultProps = {
  id: 0,
  name: '',
  date: '',
  total: '',
  spent: '',
  left: ''
};

export default Consumer;
