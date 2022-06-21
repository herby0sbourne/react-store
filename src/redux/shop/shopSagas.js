import { takeLatest, call, put, all } from 'redux-saga/effects';
import firestore, {
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shopActions';
import shopActionTypes from './shopTypes';

export function* fetchCollectionsStartAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsStartAsync
  );
}

export function* shopSaga() {
  yield all([call(fetchCollectionsStart)]);
}
