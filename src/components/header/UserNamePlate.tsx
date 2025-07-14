import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { userState } from "../../atoms/userAtom";
import SignOutBtn from "./SignOutBtn";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 16px;
  gap: 8px;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

const UserName = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.white.lighter};
  max-width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function UserNamePlate() {
  const user = useRecoilValue(userState);

  if (!user) return null;

  return (
    <Wrapper>
      {user.photoURL && <Avatar src={user.photoURL} alt="user" />}
      <UserName>{user.displayName || "사용자"}</UserName>
      <SignOutBtn />
    </Wrapper>
  );
}

export default UserNamePlate;
