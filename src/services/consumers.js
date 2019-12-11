import getConsumers from '../utils/api';

// just resolve the api async facade I did on util/api file.
export default () => getConsumers().then(result => result);
