import React from "react";
import { Link } from "react-router-dom";
import CardsCondensed from "./CardsCondensed";

export default class CardsList extends React.Component {

  render() {
    return (
      <div>
        <Link to="/create-card">
          <button type="click">New Card</button>
        </Link>
        <Link to="/">
          <button type="click">Logout</button>
        </Link>
        <h1>PrefCards List</h1>
        <ul>
          <CardsCondensed {...this.props}/>
        </ul>
      </div>
    );
  }
}
