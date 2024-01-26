import { Component } from "react";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";
import { IoLogoFacebook } from "react-icons/io";

import loginlogo from "../../images/loginlogo.png";
import instagramlogo from "../../images/instagramlogo.png";
import microsoftbutton from "../../images/microsoftbutton.png";
import googleplaybutton from "../../images/googleplaybutton.png";

import "./index.css";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    showSubmitError: false,
    errorMsg: "",
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitSuccess = (jwtToken) => {
    const { history } = this.props;

    Cookies.set("jwt_token", jwtToken, {
      expires: 30,
      path: "/",
    });
    history.replace("/");
  };

  onSubmitFailure = (errorMsg) => {
    this.setState({ showSubmitError: true, errorMsg });
  };

  submitForm = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const userDetails = { username, password };
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token);
    } else {
      this.onSubmitFailure(data.error_msg);
    }
  };

  renderPasswordField = () => {
    const { password } = this.state;
    return (
      <>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    );
  };

  renderUsernameField = () => {
    const { username } = this.state;
    return (
      <>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Phone number, username or email address"
        />
      </>
    );
  };

  render() {
    const { showSubmitError, errorMsg } = this.state;
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken !== undefined) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login-form-bg-container">
        <div className="login-left-right-containers">
          <div className="login-left-container">
            <img src={loginlogo} className="login-image" alt="website login" />
          </div>
          <div className="login-right-container">
            <form className="form-container" onSubmit={this.submitForm}>
              <img
                src={instagramlogo}
                alt="website logo"
                className="website-logo"
              />
              {this.renderUsernameField()}
              {this.renderPasswordField()}
              {showSubmitError && <p className="error-message">{errorMsg}</p>}
              <button type="submit" className="login-button">
                Log in
              </button>
              <div className="login-or-dividor">
                <div className="login-dividor"></div>
                <div className="or-text">OR</div>
                <div className="login-dividor"></div>
              </div>
              <div className="facebook-container">
                <IoLogoFacebook className="facebook-icon" />
                <p className="facebook-login-text">Log in with Facebook</p>
              </div>
              <p className="forget-text">Forgotten Your Password?</p>
            </form>
            <div className="account-container">
              <p className="account-text">
                Don't have an account?
                <a href="https://www.instagram.com/" className="sign-in-text">
                  Sign up
                </a>
              </p>
            </div>
            <div className="get-app-bg-container">
              <p className="get-app-text">Get the app</p>
              <div className="buttons-container">
                <button className="button">
                  <a href="https://play.google.com/store/apps?hl=en_IN&gl=US">
                    <img src={googleplaybutton} className="button-image" />
                  </a>
                </button>
                <button className="button">
                  <a href="https://support.microsoft.com/en-us/office/create-a-link-or-a-code-for-joining-a-team-in-microsoft-teams-11b0de3b-9288-4cb4-bc49-795e7028296f">
                    <img src={microsoftbutton} className="button-image" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
