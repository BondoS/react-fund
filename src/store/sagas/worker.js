import { put } from 'redux-saga/effects';
import consumers from '../../utils/data';
import {
  consumerImportFail,
  consumerImportSuccess,
  consumerImportStart
} from '../actions/actionCreator';

/* eslint-disable */
export function* consumersImportSage() {
  try {
    yield put(consumerImportStart());
    const res = yield new Promise(resolve => {
      setTimeout(() => resolve(consumers), 1000);
    });
    yield console.log(res);
    yield put(consumerImportSuccess(res));
  } catch (error) {
    console.log(error);
    yield put(consumerImportFail(error));
  }
}
