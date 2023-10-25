import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import ReactLoading from "react-loading";

function LoginPage({
  setCurrentPage,
  setLogedinEmail,
  setLogedin,
  setIsLoading,
  isLoading,
}) {
  const [formData, setFormData] = useState({
    userName: "",
    userPassword: "",
    userEmail: "",
    loginEmail: "",
    loginPassword: "",
  });
  const [loginRes, setLoginRes] = useState(null);
  const [isRendered, setIsRendered] = useState(false);

  async function userHandler(e) {
    e.preventDefault();
    setLoginRes(null);
    setIsRendered(false);
    const { userName, userEmail, userPassword } = formData;
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://api.storerestapi.com/auth/register",
        {
          name: userName,
          email: userEmail,
          password: userPassword,
        }
      );
      console.log(response);
      const data = await response.data;
      console.log(userName, userEmail, userPassword, data);
      await setLoginRes(data);
      await setIsRendered(true);
    } catch (error) {
      // Handle error
      console.error(error);
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function userLoginHandler(e) {
    e.preventDefault();
    setLoginRes(null);
    setIsRendered(false);
    const { loginEmail, loginPassword } = formData;
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://api.storerestapi.com/auth/login",
        {
          email: loginEmail,
          password: loginPassword,
        }
      );
      const res = await response.data;
      setLoginRes(res);
      setIsRendered(true);

      console.log(res);
    } catch (error) {
      // Handle error
      console.error(error);
      error.response.data.status === 400 &&
        toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (isRendered) {
      console.log(loginRes?.message);
      if (loginRes?.status === 200) {
        toast.success("Login success");
        setCurrentPage("home");
        setLogedin(true);
        setLogedinEmail({ email: formData.loginEmail });

        console.log(formData.loginEmail);
      } else if (loginRes?.status === 201) {
        toast.success("Signup success");
        setCurrentPage("home");
      }
    }
  }, [loginRes, isRendered]);

  fetch("https://api.storerestapi.com/users/612e4851345dcc333ac6cb24")
    .then((response) => response.json())
    .then((json) => console.log(json));

  useEffect(function () {
    async function fetchUser() {
      const res = await fetch("https://api.storerestapi.com/users");
      const data = await res.json();
      console.log(data);
      // data.data.map((user) => {formData.loginEmail===email}(set))
    }
    fetchUser();
  }, []);
  return (
    <>
      <div className="user-pass position-absolute top-0 right-0 bg-white">
        <p>user: marklyan@gmail.com </p>

        <p>pass: simple_password </p>
      </div>
      <div className="body">
        <div className="main">
          <Toaster />
          <button
            className="bg-transparent m-0 btn w-25 "
            onClick={() => setCurrentPage("home")}
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
              <button onClick={userHandler}>Sign up</button>
            </form>
          </div>
          <div className="login">
            <form className="form-input ">
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
