import { useState } from "react";
import "./LoginForm.css";


function LoginPage({ setCurrentPage, setUser ,user}) {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");

  function userHandler(e) {
    e.preventDefault();
    const user = {
      name: userName,
      password: userPassword,
      email: userEmail,
    };
    setUser(user);
    console.log(user)
  }

  return (
    <div className="body">
      <div class="main">
        <button
          className="bg-transparent m-0 btn w-25 "
          onClick={() => setCurrentPage("home")}
        >
          ✖️
        </button>
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div class="signup">
          <form className="form-input">
            <label for="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              type="text"
              name="txt"
              placeholder="User name"
              required=""
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required=""
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <button  onClick={userHandler}>
              Sign up
            </button>
          </form>
        </div>
        <div class="login">
          <form className="form-input ">
            <label for="chk" aria-hidden="true">
              Login
            </label>
            <input type="email" name="email" placeholder="Email" required="" />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
