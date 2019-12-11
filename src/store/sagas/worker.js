import { put } from 'redux-saga/effects';
import getConsumers from '../../services/consumers';
import {
  consumerImportFail,
  consumerImportSuccess,
  consumerImportStart
} from '../actions/actionCreator';

/* eslint-disable */
export function* consumersImportSage() {
  try {
    yield put(consumerImportStart());
    const res = yield getConsumers();
    yield put(consumerImportSuccess(res));
  } catch (error) {
    console.log(error);
    yield put(consumerImportFail(error));
  }
}
