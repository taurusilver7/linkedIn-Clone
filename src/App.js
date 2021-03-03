import React, { useEffect } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Login from "./components/Login/Login";

import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import Widget from "./components/Widget/Widget";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        dispatch(
          login({
            email: authUser.email,
            uid: authUser.uid,
            displayName: authUser.displayName,
            photoUrl: authUser.photoURL,
          })
        );
      } else {
        // user has logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      )}
    </div>
  );
}

export default App;
