import React from "react";
import { Link } from "react-router-dom";
import CardsContext from "../context/CardsContext";
import LogoutButton from "./LogoutButton";
import DeleteButton from "./DeleteButton";

export default class CardById extends React.Component {
  static contextType = CardsContext;
  allCardsButton = () => {
    return (
      <Link to="/all">
        <button type="click">All Cards</button>
      </Link>
    );
  };

  findById = () => {
    const id = parseInt(this.props.match.url.split("/").slice(2));
    const cardById = this.context.cardsList.find(card => card.id === id);
    return this.generateCard(cardById);
  };
  generateCard = card => {
    return (
      <div id={card.id}>
        <h1>Your PrefCard</h1>
        <h2>Surgeon: {card.surgeon} </h2>
        <h3>Procedure: {card.procedure} </h3>
        <section>
          <p>Position: {card.position} </p>
          <p>Glove Size: {card.glove_size} </p>
          <p>Glove Type: {card.glove_type} </p>
          <p>Domninant Hand: {card.dominant_hand} </p>
        </section>
        <section>
          <p>Equipment: {card.equipment} </p>
          <p>Supplies: {card.supplies} </p>
          <p>Instrumentation: {card.instrumentation} </p>
          <p>Suture and Usage: {card.suture_and_usage} </p>
          <p>Dressings: {card.dressings} </p>
          <p>Skin Prep: {card.skin_prep} </p>
          <p>Medication: {card.medications} </p>
        </section>
      </div>
    );
  };
  render() {
    return (
      <div>
        <LogoutButton />
        {this.allCardsButton()}
        {this.findById()}
        <DeleteButton {...this.props} url={this.props.match.url}/>
      </div>
    );
  }
}
