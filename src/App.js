import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // In react-router-dom v6, "Switch" is replaced by routes "Routes".
import { connect } from 'react-redux';
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import CheckOutPage from './pages/checkout/CheckOutPage';
import CollectionPage from './pages/category/CollectionPage';
import SignInAndSignUp from './pages/signIn-signup//SignInSIgnUp';
import { checkUserSession } from './redux/user/userActions';
import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    // this.unsubscribeFromAuth();
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
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserSession: () => dispatch(checkUserSession()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
