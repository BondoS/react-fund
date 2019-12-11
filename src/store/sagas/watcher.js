import { takeLatest, all } from 'redux-saga/effects';

import { CONSUMERS_IMPORT_INITIATE } from '../actions/actions';

import { consumersImportSage } from './worker';

export default function* watcherSage() {
  yield all([takeLatest(CONSUMERS_IMPORT_INITIATE, consumersImportSage)]);
}
