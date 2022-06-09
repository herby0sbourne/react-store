import React from 'react';
import SignIn from '../../components/sign-in/SignIn';
import SIgnUp from '../../components/sign-up/SignUp';

import './signinsignup.scss';

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SIgnUp />
    </div>
  );
};

export default SignInAndSignUp;
