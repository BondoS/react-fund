import getConsumers from '../utils/api';

// just resolve the api async facade I did on util/api file.
export default () =>
  getConsumers().then(result => {
    const enhancedList = result.map(element => {
      return {
        ...element,
        total: element.budget,
        spent: element.budget_spent,
        left: element.budget - element.budget_spent
      };
    });
    return enhancedList;
  });
