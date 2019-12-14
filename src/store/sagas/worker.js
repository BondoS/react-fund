import { put } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import getConsumers from '../../services/consumers';
import {
  consumerImportFail,
  consumerImportSuccess,
  consumerImportStart,
  modalHide
} from '../actions/actionCreator';

/* eslint-disable */
export function* consumersImportSage() {
  try {
    yield put(showLoading());
    yield put(consumerImportStart());
    const res = yield getConsumers();
    yield put(consumerImportSuccess(res));
    yield put(modalHide());
    yield put(hideLoading());
  } catch (error) {
    console.log(error);
    yield put(consumerImportFail(error));
    yield put(modalHide());
    yield put(hideLoading());
  }
}
