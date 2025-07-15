import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { userState } from "../../atoms/userAtom";
import { loginWithGoogle } from "../../utils/firebaseAuth";
import { useEffect } from "react";
import React from "react";

const SignIn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  padding: 8px;
  cursor: pointer;
  color: ${(props) => props.theme.red};
  background-color: ${(props) => props.theme.white};
  border-radius: 12px;
  border-color: transparent;
  margin-left: 15px;
`;

function SignInBtn() {
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    console.log("it's rendered");
  });

  const handleSignIn = async () => {
    try {
      const result = await loginWithGoogle();
      const user = result.user;
      setUser({
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });
    } catch (e) {
      console.error("Google login failed", e);
    }
  };

  return <SignIn onClick={handleSignIn}>ログイン</SignIn>;
}

export default React.memo(SignInBtn);
