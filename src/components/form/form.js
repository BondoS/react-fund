import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classes from './form.module.scss';

function Form({ id, modalHideHandler, total, name, spent, update }) {
  const [input, setInput] = useState(total);
  const [valid, setValid] = useState(total > spent);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInput = value => {
    setInput(value);
    if (value > spent) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (valid) {
      setIsSubmitted(true);
      update(id, input);
      // modalHideHandler();
    }
  };

  // useEffect(() => {
  //   return () => {
  //     modalHideHandler();
  //   };
  // }, [modalHideHandler]);

  return (
    <form className={classes.fundForm} onSubmit={handleSubmit}>
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
        disabled={isSubmitted}
        min={spent}
        value={input}
        onChange={e => handleInput(e.target.value)}
      />
      <div>{!valid && `Total budget should not be less than ${spent}`}</div>
      <div>{isSubmitted && `Updating your budget...`}</div>
      <button type="submit" disabled={!valid}>
        save
      </button>
    </form>
  );
}

Form.propTypes = {
  id: PropTypes.number,
  modalHideHandler: PropTypes.func,
  total: PropTypes.number,
  name: PropTypes.string,
  spent: PropTypes.number,
  update: PropTypes.func
};
Form.defaultProps = {
  id: 0,
  modalHideHandler: () => {},
  total: 0,
  name: '',
  spent: 0,
  update: () => {}
};

export default Form;
