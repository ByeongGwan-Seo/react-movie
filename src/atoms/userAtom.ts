import { atom } from "recoil";

export type AuthUser = {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
} | null;

export const userState = atom<AuthUser>({
  key: "userState",
  default: null,
});
