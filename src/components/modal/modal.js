import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classes from './modal.module.scss';
import { modalHide } from '../../store/actions/actionCreator';

function Modal(props) {
  const el = document.createElement('div');
  const modalRoot = document.getElementById('modal-root');
  const dispatch = useDispatch();

  el.className = classes.modal;

  const escapeClicked = e => {
    if (e.keyCode === 27) {
      dispatch(modalHide());
    }
  };

  useEffect(() => {
    modalRoot.appendChild(el);
    document.addEventListener('keydown', escapeClicked, false);

    return () => {
      modalRoot.removeChild(el);
      document.removeEventListener('keydown', escapeClicked, false);
      dispatch(modalHide());
    };
  }, [props.id]);

  return ReactDOM.createPortal(props.children, el);
}

Modal.propTypes = {
  modalHideHandler: PropTypes.func
};

export default Modal;
