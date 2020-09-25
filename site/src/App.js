import React from 'react';
import { Router } from "@reach/router";

import Landing from "./Pages/Landing"

import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ProfilePage from "./Pages/Profile";
import PasswordReset from "./Pages/PasswordReset";
import 'antd/dist/antd.css';
function App() {
  const user = null;
  return (
        user ?
        <ProfilePage />
      :
        <Router>
          <Landing path="/" />
          
          <Login  path="login" />

        </Router>

  );
}

export default App;
