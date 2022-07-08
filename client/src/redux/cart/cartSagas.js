import { takeLatest, put, call, all, select } from 'redux-saga/effects';
import cartActionTypes from './cartTypes';
import userActionTypes from '../user/userTypes';
import { getUserCartRef } from '../../firebase/firebase';
import { emptyCart, setCartFromFirebase } from './cartActions';
import { selectCurrentUser } from '../user/userSelectors';
import { selectCartItems } from '../cart/cartSelector';

export function* emptyCartOnSignOut() {
  yield put(emptyCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, emptyCartOnSignOut);
}

export function* checkCartFromFirebase(payload) {
  const { user } = payload;
  // yield console.log(user);
  const cartRef = yield getUserCartRef(user.id);
  const cartSnapshot = yield cartRef.get();
  yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
}

export function* onUserSignIn() {
  yield takeLatest(userActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
}

export function* updateCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* onCartChange() {
  yield takeLatest(
    [cartActionTypes.ADD_ITEM, cartActionTypes.REDUCE_ITEM, cartActionTypes.EMPTY_CART],
    updateCartInFirebase
  );
}

export function* cartSaga() {
  yield all([call(onSignOutSuccess), call(onUserSignIn), call(onCartChange)]);
}
