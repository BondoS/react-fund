import {
  CONSUMERS_IMPORT_SUCCESS,
  CONSUMERS_IMPORT_FAIL,
  CONSUMERS_IMPORT_INITIATE,
  CONSUMERS_IMPORT_START,
  MODAL_SHOW,
  MODAL_HIDE
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

export const modalShow = payload => {
  return {
    type: MODAL_SHOW,
    show: true,
    id: payload.id,
    name: payload.name,
    total: payload.total,
    spent: payload.spent
  };
};

export const modalHide = () => {
  return {
    type: MODAL_HIDE,
    show: false
  };
};
