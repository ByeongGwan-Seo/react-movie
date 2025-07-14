import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { userState } from "../../atoms/userAtom";
import { logoutUser } from "../../utils/firebaseAuth";

const SignOut = styled.button`
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
`;

function SignOutBtn() {
  const setUser = useSetRecoilState(userState);

  const handleSignOut = async () => {
    await logoutUser();
    setUser(null);
  };
  return <SignOut onClick={handleSignOut}>ログアウト</SignOut>;
}

export default SignOutBtn;
