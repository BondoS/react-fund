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
        <button
          type="button"
          className={classes.close}
          aria-label="close"
          onClick={() => modalHideHandler()}
        />
      </div>
      <h5>
        Company: <span>{name}</span>
      </h5>
      <div className={[classes['custom-input'], classes.input].join(' ')}>
        <input
          id="budgetInput"
          disabled={isSubmitted}
          min={spent}
          value={input}
          onChange={e => handleInput(e.target.value)}
        />
        <label htmlFor="budgetInput">Budget</label>
        <div className={classes.notValid}>
          {!valid && `Total budget should not be less than ${spent}`}
        </div>
        <div className={classes.updating}>
          {isSubmitted && `Updating your budget...`}
        </div>
      </div>

      <button className={classes.submit} type="submit" disabled={!valid}>
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
