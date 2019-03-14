import React from "react";
import { Link } from 'react-router-dom';

export default class Register extends React.Component {
  state = {
    name: "",
    position: "",
    userName: "",
    password: "",
    reTypedPassword: ""
  };
  handleRegisterChange = e => {
    const stateProperty = e.target.className;
    this.setState({ [stateProperty]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.history.push('/all')
  };
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Name: </label>
          <input
            type="text"
            className="name"
            onChange={e => this.handleRegisterChange(e)}
          />
          <select
            className="position"
            onChange={e => this.handleRegisterChange(e)}
          >
            <option>Position</option>
            <option>Doctor</option>
            <option>Nurse</option>
            <option>Tech</option>
          </select>
          <br />
          <label>Username: </label>
          <input
            type="text"
            className="userName"
            onChange={e => this.handleRegisterChange(e)}
          />
          <br />
          <label>Password: </label>
          <input
            type="text"
            className="password"
            onChange={e => this.handleRegisterChange(e)}
          />
          <br />
          <label>Confirm password: </label>
          <input
            type="text"
            className="reTypedPassword"
            onChange={e => this.handleRegisterChange(e)}
          />
          <br />
          <button type="submit">Submit</button>
          <Link to="/">
          <button type="click">Cancel</button>
          </Link>
        </form>
      </div>
    );
  }
}
