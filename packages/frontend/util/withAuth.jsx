import React, { useEffect } from "react";
import { useRouter } from "next/router";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import initFirebase from "./config";

initFirebase();
const auth = firebase.auth();

const withAuth = (Component) => (props) => {
  const router = useRouter();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (!authUser) {
        router.push("/");
      }
    });
  }, []);

  return (
    <div>
      <Component {...props} />
    </div>
  );
};

export default withAuth;
