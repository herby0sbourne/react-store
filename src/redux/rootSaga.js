import { all, call } from 'redux-saga/effects';
import { shopSaga } from './shop/shopSagas';
import { userSaga } from './user/userSagas';
import { cartSaga } from './cart/cartSagas';

export default function* rootSaga() {
  yield all([call(shopSaga), call(userSaga), call(cartSaga)]);
}
