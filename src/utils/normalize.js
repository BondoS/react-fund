import germanFormat from './format';

export default list =>
  list.map(element => {
    return {
      ...element,
      total: germanFormat(element.budget),
      spent: germanFormat(element.budget_spent),
      left: germanFormat(element.budget - element.budget_spent)
    };
  });
