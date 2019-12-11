import consumers from './data';

export default async () => {
  // just wait 2 seconds to mock API request
  await new Promise(resolve => setTimeout(resolve, 2000));
  // calling an api that will fail every time, then returning the catch condition every time
  return fetch('someApiThatWillEventuallyFail.com')
    .then(res => res.json())
    .then(res => res)
    .catch(() => consumers);
};
