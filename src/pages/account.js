import React from "react";
import { Router } from "@reach/router";
import { login, logout, isAuthenticated, getProfile } from "../utils/auth";
import { Link } from "gatsby";

import Ahome from "../components/account_home.js";
import DataView from "../components/data_view.js";

import Parse from "parse";
Parse.initialize(process.env.B4A_APP_ID, process.env.B4A_JS_KEY);
Parse.serverURL = "https://parseapi.back4app.com/";

const Home = ({ user }) => {
  return <Ahome usr={user}></Ahome>;
};

const Account = () => {
  if (!isAuthenticated()) {
    login();
    return <p>Redirecting to login...</p>;
  }

  const user = getProfile();

  return (
    <>
      <nav>
        <Link to="/account/">Home</Link>{" "}
        <Link to="/account/DataView/">DataView</Link>{" "}
        <a
          href="#logout"
          onClick={(e) => {
            logout();
            e.preventDefault();
          }}
        >
          Log Out
        </a>
      </nav>
      <Router>
        <Home path="/account/" user={user} />
        <DataView path="/account/DataView" />
      </Router>
    </>
  );
};

export default Account;
