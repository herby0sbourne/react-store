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
import { auth, createUserProfileDocument } from './firebase/firebase';
import { fetchCollectionsStartAsync } from './redux/shop/shopActions';
import { selectIsCollectionFetching } from './redux/shop/shopSelector';

import Spinner from './components/with-spinner/Spinner';
import './App.css';

const CollectionPageWithSpinner = Spinner(CollectionPage);

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

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
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    // auth.signOut();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop">
            <Route index element={<ShopPage />} />
            <Route path=":collectionId" element={<CollectionPage />} />
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
  //   return (
  //     <div>
  //       <Header />
  //       <Routes>
  //         <Route path="/" element={<HomePage />} />
  //         <Route path="shop">
  //           <Route index element={<ShopPage />} />
  //           <Route
  //             path=":collectionId"
  //             element={
  //               <CollectionPageWithSpinner isLoading={isCollectionFetching} />
  //             }
  //           />
  //           {/* <Route path=":collectionId" element={<CollectionPage />} /> */}
  //           {/* <Route path="*" element={<NoMatch />} /> */}
  //         </Route>
  //         <Route path="/checkout" element={<CheckOutPage />} />
  //         <Route
  //           path="/signin"
  //           element={
  //             this.props.currentUser ? (
  //               <Navigate to="/" replace />
  //             ) : (
  //               <SignInAndSignUp />
  //             )
  //           }
  //         />
  //       </Routes>
  //     </div>
  //   );
  // }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    isCollectionFetching: selectIsCollectionFetching(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
