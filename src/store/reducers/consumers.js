import { CONSUMERS_IMPORT_SUCCESS } from '../actions/actions';
import normalize from '../../utils/normalize';

const initialConsumers = normalize([
  {
    id: 1,
    name: 'Martian Firma',
    budget: 10000.0,
    budget_spent: 4500.0,
    date_of_first_purchase: '2119-07-07'
  },
  {
    id: 2,
    name: 'Solar Firma',
    // eslint-disable-next-line
    budget: 1123.22,
    budget_spent: 451.3754,
    date_of_first_purchase: '2120-01-14'
  }
]);

const reducer = (state = initialConsumers, action) => {
  switch (action.type) {
    case CONSUMERS_IMPORT_SUCCESS:
      return action.consumers;

    default:
      return state;
  }
};

export default reducer;
