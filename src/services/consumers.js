import getConsumers from '../utils/api';
import germanFormat from '../utils/format';

// just resolve the api async facade I did on util/api file.
export default () =>
  getConsumers().then(result => {
    const enhancedList = result.map(element => {
      return {
        ...element,
        total: germanFormat(element.budget),
        spent: germanFormat(element.budget_spent),
        left: germanFormat(element.budget - element.budget_spent)
      };
    });
    return enhancedList;
  });
