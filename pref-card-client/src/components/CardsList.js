import React from "react";
import { Link } from "react-router-dom";
import CardsCondensedList from "./CardsCondensedList";
import LogoutButton from './LogoutButton';

export default class CardsList extends React.Component {

  render() {
    return (
      <div>
        <Link to="/create-card">
          <button type="click">New Card</button>
        </Link>
        <LogoutButton />
        <h1>PrefCards List</h1>
        <ul>
          <CardsCondensedList {...this.props}/>
        </ul>
      </div>
    );
  }
}
