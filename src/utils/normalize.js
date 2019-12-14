export default list =>
  list.map(element => {
    return {
      ...element,
      total: element.budget,
      spent: element.budget_spent,
      left: element.budget - element.budget_spent
    };
  });
