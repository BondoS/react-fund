import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classes from './form.module.scss';

function Form({ id, modalHideHandler, total, name, spent }) {
  const [input, setInput] = useState(total);
  const [valid, setValid] = useState(false);

  const handleInput = value => {
    setInput(value);
    if (value < spent) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    modalHideHandler();
  };

  useEffect(() => {
    return () => {
      modalHideHandler();
    };
  }, [modalHideHandler]);

  return (
    <form className={classes.fundForm} onSubmit={e => handleSubmit(e)}>
      <div />
      <div>
        <button type="button" onClick={() => modalHideHandler()}>
          Close
        </button>
      </div>
      <div>
        Company Name: <span>{name}</span>
      </div>
      <input
        min={spent}
        value={input}
        onChange={e => handleInput(e.target.value)}
      />
      <div>{valid && `Total budget should not be less than ${spent}`}</div>
      <button type="submit">save</button>
    </form>
  );
}

Form.propTypes = {
  id: PropTypes.number,
  modalHideHandler: PropTypes.func,
  total: PropTypes.number,
  name: PropTypes.string,
  spent: PropTypes.number
};
Form.defaultProps = {
  id: 0,
  modalHideHandler: () => {},
  total: 0,
  name: '',
  spent: 0
};

export default Form;
