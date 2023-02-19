import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import initFirebase from "./config";
import {
  getUserFromCookie,
  removeUserCookie,
  setUserCookie,
} from "./userCookie";

initFirebase();

export const mapUserData = async (user) => {
  const { uid, email } = user;
  const token = await user.getIdToken(true);
  return {
    id: uid,
    email,
    token,
  };
};

const useUser = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const logout = async () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        router.push("/");
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.error(e);
      });
  };

  useEffect(() => {
    const cancelAuthListener = firebase
      .auth()
      .onIdTokenChanged(async (userToken) => {
        if (userToken) {
          const userData = await mapUserData(userToken);
          setUserCookie(userData);
          setUser(userData);
        } else {
          removeUserCookie();
          setUser(null);
        }
      });

    const userFromCookie = getUserFromCookie();
    if (!userFromCookie) {
      return () => {};
    }
    setUser(userFromCookie);
    return () => cancelAuthListener;
  }, []);

  return { user, logout };
};

export { useUser };
