import React, { useContext } from "react";
import firebaseConfig from "./Firebase.config";
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from "./../../App";
import { useHistory, useLocation } from "react-router";
import "./Login.css";
import loginVideo from "../../images/loginVideo.mp4";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // var credential = result.credential;
        // var token = credential.accessToken;
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container-fluid login-page">
      <div className="login-aria ">
        {/* <h1>Please Login</h1>
        <button
          type="button"
          className="googleBtn btn btn-success mt-5"
          onClick={handleGoogleSignIn}
        >
          Google Sign In
        </button> */}
        <div className="row">
          <div className="col-md-7">
            <div className="video">
              <video
                loop={true}
                autoPlay={true}
                autoplayTimeout={10000}
                autoplayHoverPause={true}
                muted={true}
              >
                <source src={loginVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="col-md-5 d-flex justify-content-center">
            <div className="login-part">
              <h3>Login</h3>
              <h6>
                Doesn't have an account yet? <span> Sign Up </span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
