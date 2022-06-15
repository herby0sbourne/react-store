import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // In react-router-dom v6, "Switch" is replaced by routes "Routes".
import { connect } from 'react-redux';
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import CheckOutPage from './pages/checkout/CheckOutPage';
import CollectionPage from './pages/category/CollectionPage';
import SignInAndSignUp from './pages/signIn-signup//SignInSIgnUp';
import { setCurrentUser } from './redux/user/userActions';
import firestore, {
  auth,
  createUserProfileDocument,
  convertCollectionSnapshotToMap,
} from './firebase/firebase';
import { updateCollections } from './redux/shop/shopActions';

// import { isLoading } from './redux/spinner/spinnerAction';
import Spinner from './components/with-spinner/Spinner';
import './App.css';

const CollectionPageWithSpinner = Spinner(CollectionPage);

class App extends React.Component {
  state = {
    isLoading: true,
  };

  unsubscribeFromAuth = null;
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { setCurrentUser, updateCollections } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionSnapshotToMap(snapshot);

        updateCollections(collectionsMap);
        this.setState({ isLoading: false });
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    this.unsubscribeFromSnapshot();
    // auth.signOut();
  }

  status = (status) => {
    this.setState({ data: status });
  };

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop">
            <Route index element={<ShopPage />} />
            <Route
              path=":collectionId"
              element={<CollectionPageWithSpinner isLoading={isLoading} />}
            />
            {/* <Route path=":collectionId" element={<CollectionPage />} /> */}
            {/* <Route path="*" element={<NoMatch />} /> */}
          </Route>
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route
            path="/signin"
            element={
              this.props.currentUser ? (
                <Navigate to="/" replace />
              ) : (
                <SignInAndSignUp />
              )
            }
          />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    isLoading: state.spinner.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
    updateCollections: (collectionsMap) =>
      dispatch(updateCollections(collectionsMap)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
