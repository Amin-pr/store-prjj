import "./LoginForm.css"
function LoginForm() {
  return (
    <body>
      <div className="login-form d-flex justify-content-center my-5 ">
        <div className="login-input-holder d-flex flex-column align-middle w-25">
          <div className="form-group">
            <label htmlFor="username" className="col-form-label-lg">
              User Name:
              <input
                type="text"
                id="username"
                className="username-input form-control"
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="col-form-label-lg">
              Password:
              <input
                type="text"
                id="password"
                className="password-input form-control"
              />
            </label>
          </div>
            <button className="btn bg-primary w-25" type="submit" >Log in</button>
        </div>
      </div>
    </body>
  );
}
export default LoginForm;
