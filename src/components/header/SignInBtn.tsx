import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { userState } from "../../atoms/userAtom";
import { loginWithGoogle } from "../../utils/firebaseAuth";

const SignIn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  padding: 8px;
  cursor: pointer;
  color: #23c0db;
  background-color: ${(props) => props.theme.white};
  border-radius: 12px;
  border-color: transparent;
  margin-left: 15px;
`;

function SignInBtn() {
  const setUser = useSetRecoilState(userState);

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

export default SignInBtn;
