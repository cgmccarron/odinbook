import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../Reducer";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);

        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src="/obcolor.png" alt="fb circle" />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
