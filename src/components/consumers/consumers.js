import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Consumer from '../consumer/consumer';
import { consumerImportInitiate } from '../../store/actions/actionCreator';

function Consumers() {
  const consumersList = useSelector(state => state.consumers);

  const dispatch = useDispatch();

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
          />
        );
      })}
    </div>
  );
}

export default Consumers;
