import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Consumer from '../consumer/consumer';
import {
  consumerImportInitiate,
  modalShow,
  modalHide,
  consumerUpdate
} from '../../store/actions/actionCreator';
import Modal from '../modal/modal';
import Form from '../form/form';

function Consumers() {
  const consumersList = useSelector(state => state.consumers);
  const { show, id, name, total, spent } = useSelector(state => state.modal);
  const dispatch = useDispatch();

  const modalShowHandler = clickedId => {
    const [selected] = consumersList.filter(
      consumer => consumer.id === clickedId
    );

    dispatch(
      modalShow({
        id: clickedId,
        name: selected.name,
        total: selected.total,
        spent: selected.spent
      })
    );
  };
  const consumerUpdateHandler = (consumerId, budget) => {
    setTimeout(() => {
      dispatch(consumerUpdate(consumerId, budget));
      dispatch(modalHide());
    }, 2500);
  };
  const modalHideHandler = () => {
    dispatch(modalHide());
  };

  useEffect(() => {
    dispatch(consumerImportInitiate());
    // return () => {
    //   cleanup
    // };
  }, [dispatch]);

  return (
    <div>
      {consumersList.map(element => {
        return (
          <Consumer
            key={element.id}
            id={element.id}
            name={element.name}
            date={element.date_of_first_purchase}
            total={element.total}
            spent={element.spent}
            left={element.left}
            modalShowHandler={modalShowHandler}
            modalHideHandler={modalHideHandler}
          />
        );
      })}
      {show && (
        <Modal id={id}>
          <Form
            id={id}
            modalHideHandler={modalHideHandler}
            name={name}
            total={total}
            spent={spent}
            update={consumerUpdateHandler}
          />
        </Modal>
      )}
    </div>
  );
}

export default Consumers;
