import React from "react";
import { Link } from 'react-router-dom';
import AuthService from '../services/auth-api-service';

export default class Register extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const obj = {};
    const form = new FormData(e.target);
    form.forEach((val, key) => (obj[key] = val));
    AuthService.postRegistration(obj)
      .then(this.props.history.push('/login'))
  };
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Name: </label>
          <input
            type="text"
            className="name"
            name="full_name"
          />
          <select
            className="position"
            name="position"
          >
            <option>doctor</option>
            <option>nurse</option>
            <option>tech</option>
          </select>
          <br />
          <label>Username: </label>
          <input
            type="text"
            className="userName"
            name="user_name"
          />
          <br />
          <label>Password: </label>
          <input
            type="text"
            className="password"
            name="password"
          />
          <br />
          <label>Confirm password: </label>
          <input
            type="text"
            className="reTypedPassword"
            name="retyped_password"
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
