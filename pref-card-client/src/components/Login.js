import React from "react";
import { Link } from "react-router-dom";
import AuthApiService from "../services/auth-api-service";
import TokenService from "../services/token-service";

export default class Login extends React.Component {
  state = {
    userName: "",
    password: "",
    error: null
  };
  handleLoginChange = e => {
    const stateProperty = e.target.className;
    this.setState({ [stateProperty]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    AuthApiService.postLogin({
      user_name: this.state.userName,
      password: this.state.password
    })
      .then(res => {
        TokenService.saveAuthToken(res.authToken);
        this.props.history.push("/all");
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>User Name: </label>
          <input
            type="text"
            className="userName"
            onChange={e => this.handleLoginChange(e)}
          />
          <br />
          <label>Password: </label>
          <input
            type="text"
            className="password"
            onChange={e => this.handleLoginChange(e)}
          />
          <br />
          <button type="submit" className="login-submit-button">
            Submit
          </button>
          <Link to="/">
            <button type="click">Cancel</button>
          </Link>
        </form>
      </div>
    );
  }
}
