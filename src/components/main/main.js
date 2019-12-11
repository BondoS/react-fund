import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { consumerImportInitiate } from '../../store/actions/actionCreator';

function Main() {
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
        return <div>{element.name}</div>;
      })}
    </div>
  );
}

export default Main;
