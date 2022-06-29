import { takeLatest, put, call, all } from 'redux-saga/effects';
import userActionTypes from '../user/userTypes';
import { emptyCart } from './cartActions';

export function* emptyCartOnSignOut() {
  yield put(emptyCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, emptyCartOnSignOut);
}

export function* cartSaga() {
  yield all([call(onSignOutSuccess)]);
}
