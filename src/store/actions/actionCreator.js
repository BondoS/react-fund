import {
  CONSUMERS_IMPORT_SUCCESS,
  CONSUMERS_IMPORT_FAIL,
  CONSUMERS_IMPORT_INITIATE,
  CONSUMERS_IMPORT_START
} from './actions';

export const consumerImportInitiate = () => {
  return { type: CONSUMERS_IMPORT_INITIATE };
};

export const consumerImportStart = () => {
  return { type: CONSUMERS_IMPORT_START };
};

export const consumerImportSuccess = consumers => {
  return {
    type: CONSUMERS_IMPORT_SUCCESS,
    consumers
  };
};

export const consumerImportFail = error => {
  return {
    type: CONSUMERS_IMPORT_FAIL,
    error
  };
};
