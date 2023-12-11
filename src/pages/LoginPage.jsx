import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "../components/app.css";
import "../components/LoginForm.css";
import { useAuth } from "../context/userAuth";
import { useNavigate } from "react-router";
import ReactLoading from "react-loading";

function LoginPage() {
  const [formData, setFormData] = useState({
    userName: "",
    userPassword: "",
    userEmail: "",
    loginEmail: "marklyan@gmail.com",
    loginPassword: "simple_password",
  });

  const { dispatch, isLoading } = useAuth();
  const navigate = useNavigate();
  async function userLoginHandler(e) {
    e.preventDefault();
    dispatch({ type: "user/login" });

    const { loginEmail, loginPassword } = formData;
    try {
      const response = await axios.post(
        "https://api.storerestapi.com/auth/login",
        {
          email: loginEmail,
          password: loginPassword,
        }
      );
      const res = await response.data;
      if (res.status === 200) {
        dispatch({ type: "user/logedin", payload: loginEmail });
        navigate("/");
        toast.success(" welcome " + loginEmail);
      }
    } catch (error) {
      // Handle error
      console.error(error);
      error.response.data.status === 400 &&
        toast.error(error.response.data.message);
    }
  }

  const userSignupHandler = async (e) => {
    e.preventDefault();
    dispatch({ type: "user/signup" });
    const { userName, userEmail, userPassword } = formData;
    try {
      const response = await axios.post(
        "https://api.storerestapi.com/auth/register",
        {
          name: userName,
          email: userEmail,
          password: userPassword,
        }
      );
      const data = await response.data;
      console.log(data);
      if (data.status === 400) dispatch({ type: "user/signedup" });
      toast.success("User registered successfully");
      navigate("/");
    } catch (error) {
      // Handle error
      console.error(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      {isLoading && (
        <div className="loading-wrapper ">
          <ReactLoading type="spokes" color="#4B0082" />
        </div>
      )}

      <div className="user-pass position-absolute top-0 right-0 bg-white">
        <p className="user-pass">user: marklyan@gmail.com </p>

        <p className="user-pass">pass: simple_password </p>
      </div>
      <div className="body">
        <div className="main">
          <Toaster />
          <button
            className="bg-transparent m-0 btn w-25 "
            onClick={() => navigate("")}
          >
            ✖️
          </button>
          <input type="checkbox" id="chk" aria-hidden="true" />
          <div className="signup">
            <form className="form-input">
              <label htmlFor="chk" aria-hidden="true">
                Sign up
              </label>
              <input
                type="text"
                name="txt"
                placeholder="User name"
                required=""
                value={formData.userName}
                onChange={(e) =>
                  setFormData({ ...formData, userName: e.target.value })
                }
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required=""
                value={formData.userEmail}
                onChange={(e) =>
                  setFormData({ ...formData, userEmail: e.target.value })
                }
              />
              <input
                type="password"
                name="pswd"
                placeholder="Password"
                required=""
                value={formData.userPassword}
                onChange={(e) =>
                  setFormData({ ...formData, userPassword: e.target.value })
                }
              />
              <button onClick={userSignupHandler}>Sign up</button>
            </form>
          </div>
          <div className="login">
            <form className="form-input">
              <label htmlFor="chk" aria-hidden="true">
                Login
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required=""
                value={formData.loginEmail}
                onChange={(e) =>
                  setFormData({ ...formData, loginEmail: e.target.value })
                }
              />
              <input
                type="password"
                name="pswd"
                placeholder="Password"
                required=""
                value={formData.loginPassword}
                onChange={(e) =>
                  setFormData({ ...formData, loginPassword: e.target.value })
                }
              />
              <button onClick={userLoginHandler}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
