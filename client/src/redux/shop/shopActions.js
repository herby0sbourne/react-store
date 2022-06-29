import shopActionTypes from './shopTypes';
import firestore, {
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase';

export const fetchCollectionsStart = () => {
  return {
    type: shopActionTypes.FETCH_COLLECTIONS_START,
  };
};

export const fetchCollectionsSuccess = (collectionsMap) => {
  return {
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    collectionsMap,
  };
};

export const fetchCollectionsFailure = (errorMessage) => {
  return {
    type: shopActionTypes.FETCH_COLLECTIONS_FALIURE,
    errorMessage,
  };
};

//? REDUX THUNK
export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
        // console.log(collectionsMap);
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
