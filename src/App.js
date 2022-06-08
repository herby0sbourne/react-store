import React from 'react';
import { Routes, Route } from 'react-router-dom'; // In react-router-dom v6, "Switch" is replaced by routes "Routes".
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/signIn-signout/SignInSIgnUp';
import { auth } from './firebase/firebase';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      // if (!user) return;

      // const { uid, displayName, email } = user;

      // this.setState({ currentUser: { uid,displayName,email} });
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    // auth.signOut();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUp />} />
          {/* <Route path="/" component={HomePage} exact={true} /> */}
        </Routes>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <HomePage />
//     </div>
//   );
// }

export default App;
