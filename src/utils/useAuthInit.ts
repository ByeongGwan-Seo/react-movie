import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./firebaseAuth";
import { userState } from "../atoms/userAtom";
import { useSetRecoilState } from "recoil";
import { useEffect } from "react";

export function useAuthInit() {
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    const unsub = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsub();
  }, [setUser]);
}
