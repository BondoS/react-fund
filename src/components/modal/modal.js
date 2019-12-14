import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classes from './modal.module.scss';
import { modalHide } from '../../store/actions/actionCreator';

function Modal({ id, close, children }) {
  const el = document.createElement('div');
  const modalRoot = document.getElementById('modal-root');
  const dispatch = useDispatch();

  el.className = classes.modal;

  useEffect(() => {
    modalRoot.appendChild(el);
    document.addEventListener('keydown', close, false);

    return () => {
      modalRoot.removeChild(el);
      document.removeEventListener('keydown', close, false);
      dispatch(modalHide());
    };
  }, [id]);

  return ReactDOM.createPortal(children, el);
}

Modal.propTypes = {
  modalHideHandler: PropTypes.func
};

export default Modal;
