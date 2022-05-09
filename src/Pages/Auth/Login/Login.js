import React, { useEffect, useState } from "react";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loding from "../../Loding/Loding";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, SetErrors] = useState({
    email: "",
    password: "",
    general: "",
  });
  const [user] = useAuthState(auth);
  const [signInWithEmailAndPassword, , loading, hookError] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, loading2, googleError] =
    useSignInWithGoogle(auth);

  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const handleEmailChange = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      SetErrors({ ...errors, email: "" });
    } else {
      SetErrors({ ...errors, email: "Invalid email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };
  const handlePasswordChange = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);
    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      SetErrors({ ...errors, password: "" });
    } else {
      SetErrors({ ...errors, password: "Minimum 6 characters" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      const url = "https://peaceful-beyond-14881.herokuapp.com/login";
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          title: "foo",
          body: "bar",
          email: user.email,
        }),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("accessToken", data.accessToken);
          navigate(from, { replace: true });
        });
    }
  }, [user]);

  const resetPassword = async () => {
    if (userInfo.email) {
      await sendPasswordResetEmail(userInfo.email);
      toast("Sent email reset your password");
    } else {
      toast("please enter your email address");
    }
  };

  useEffect(() => {
    const error = hookError || googleError;
    if (error) {
      switch (error?.code) {
        case "auth/invalid-email":
          toast("Invalid email provided, please provide a valid email");
          break;
        case "auth/invalid-password":
          toast("Wrong password. Please provide a right password.");
          break;
        case "auth/popup-closed-by-user":
          toast(
            "The popup has been closed by the user before finalizing the operation."
          );
          break;
        default:
          toast("something went wrong");
      }
    }
  }, [hookError, googleError]);

  const handleGoogleSignIn = () => {
    signInWithGoogle();
    // navigate("/")
  };

  //   let from = location.state?.from?.pathname || "/";

  //   if (user) {
  //     navigate(from, { replace: true });
  //   }


  return (
    <div className="login-container">
      <div className="login-title">LOGIN</div>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Your Email"
          onChange={handleEmailChange}
        />
        {errors?.email && <p className="error-message">{errors.email}</p>}
        <input
          type="password"
          placeholder="password"
          onChange={handlePasswordChange}
        />
        {errors?.password && <p className="error-message">{errors.password}</p>}
        <button className="login-btn">Login</button>

        <ToastContainer></ToastContainer>
        <p className="text-center mt-3">
          Forget password?{" "}
          <Link
            onClick={resetPassword}
            className="sign-link fw-bold pe-auto text-decoration-none"
            to=""
          >
            Reset password
          </Link>
        </p>
      </form>
      <div>
        <button onClick={handleGoogleSignIn}>Google SignIn</button>
      </div>
      <p className="text-center mt-3">
        Don't have an account?{" "}
        <Link
          className="sign-link fw-bold pe-auto text-decoration-none"
          to="/signup"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
