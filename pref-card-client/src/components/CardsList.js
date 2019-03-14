import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

export default class CardsList extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Link to="/create-card">
          <button type="click">New Card</button>
        </Link>
        <Link to="/">
        <button type="click">Logout</button>
        </Link>
        <ul>
          <Card />
        </ul>
      </div>
    );
  }
}
