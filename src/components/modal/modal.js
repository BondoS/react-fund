import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classes from './modal.module.scss';

function Modal(props) {
  const el = document.createElement('div');
  const modalRoot = document.getElementById('modal-root');

  el.className = classes.modal;

  useEffect(() => {
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  }, [props.id]);

  return ReactDOM.createPortal(props.children, el);
}

Modal.propTypes = {
  modalHideHandler: PropTypes.func
};

export default Modal;
