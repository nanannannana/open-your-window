import React, { useState } from 'react';
import SignIn from '../components/mypage/SignIn';
import SignIn_SignUp from '../components/mypage/SignIn_SignUp';

export default function SignIn_Main() {
  const [showSignIn, setShowSignIn] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setShowSignIn(!showSignIn);
        }}
      >
        {showSignIn ? 'SignIn' : 'SingUp'}
      </button>
      {showSignIn && <SignIn />}
      {showSignIn || <SignIn_SignUp />}
    </>
  );
}
