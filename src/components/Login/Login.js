import React, { useState } from "react";
import "./Login.css";

import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { auth } from "../../firebase";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert("Please enter a full name!");
    }
    auth.createUserWithEmailAndPassword(email, password).then((authUser) => {
      authUser.user
        .updateProfile({
          displayName: name,
          photoURL: profilePic,
        })
        .then(() => {
          dispatch(
            login({
              email: authUser.user?.email,
              uid: authUser.user?.uid,
              displayName: name,
              photoURL: profilePic,
            })
          );
        })
        .catch((error) => alert(error));
    });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        dispatch(
          login({
            email: authUser.user.email,
            uid: authUser.user?.uid,
            displayName: authUser.user?.displayName,
            profileUrl: authUser.user?.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img
        src="https://genylabs.io/wp-content/uploads/2019/10/Social-Listening-to-LinkedIn.png"
        alt="logo"
      />

      <form>
        <input
          placeholder="Full Name (required if registering)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />

        <input
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile picture (optional)"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <button type="submit" onClick={signIn}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
