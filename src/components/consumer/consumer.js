import React from 'react';
import PropTypes from 'prop-types';
import * as classes from './consumer.module.scss';
import germanFormat from '../../utils/format';

function Consumer({ modalShowHandler, id, name, date, total, spent, left }) {
  return (
    <button
      className={classes.outer}
      type="button"
      onClick={() => modalShowHandler(id)}
    >
      <div>
        <span className={classes.label}>Company : </span>
        <span>{name}</span>
      </div>
      <div>
        <span className={classes.label}>Date of a first purchase : </span>
        <span>{date}</span>
      </div>
      <div>
        <span className={classes.label}>Total budget : </span>
        <span>{germanFormat(total)}</span>
      </div>
      <div>
        <span className={classes.label}>Budget spent : </span>
        <span>{germanFormat(spent)}</span>
      </div>
      <div>
        <span className={classes.label}>Budget left : </span>
        <span>{germanFormat(left)}</span>
      </div>
    </button>
  );
}

Consumer.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  date: PropTypes.string,
  total: PropTypes.number,
  spent: PropTypes.number,
  left: PropTypes.number,
  modalShowHandler: PropTypes.func
};

Consumer.defaultProps = {
  id: 0,
  name: '',
  date: '',
  total: 0,
  spent: 0,
  left: 0,
  modalShowHandler: () => {}
};

export default Consumer;
