import React from "react";
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
  state = {
    userName: "",
    password: ""
  };
  handleLoginChange = e => {
    const stateProperty = e.target.className;
    this.setState({ [stateProperty]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.userName, this.state.password);
    this.props.history.push('/all')
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
          <button
            type="submit"
            className="login-submit-button"
          >
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
