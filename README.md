This project renders a list of companies, each one has

- Company Name
- Date of a first purchase
- Total budget
- Budget spent
- Budget left

companies are fetched from a mocked endpoint.

Clicking on the company row should open a modal using **React Portal** with the company’s name and one input field:

- The field is pre-filled with the total budget for that company.
- The user is able to edit the value and submit.
- If the value is not valid, no submission will be
  possible.
- If the value is valid, a confirmation will be
  displayed for a short amount of time before the user can go back to the list of companies.
- The new value will appear in the list as soon as it is updated.

React portal modal component and Format currency helper function are covered with unit-testing
