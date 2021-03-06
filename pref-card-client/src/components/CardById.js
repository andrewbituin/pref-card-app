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
    if (!card) {
      return <></>;
    } else {
      return (
        <div id={card.id}>
          <h1>PrefCard</h1>
          <h2>Surgeon: {card.surgeon} </h2>
          {card.procedure.length > 0 && <h3>Procedure: {card.procedure} </h3>}
          <section>
            {card.position.length > 0 && <p>Position: {card.position} </p>}
            <p>Glove Size: {card.glove_size} </p>
            <p>Glove Type: {card.glove_type} </p>
            <p>Domninant Hand: {card.dominant_hand} </p>
          </section>
          <section>
            {card.equipment.length > 0 && <p>Equipment: {card.equipment} </p>}
            {card.supplies.length > 0 && <p>Supplies: {card.supplies} </p>}
            {card.instrumentation.length > 0 && <p>Instrumentation: {card.instrumentation} </p>}
            {card.suture_and_usage.length > 0 && <p>Suture and Usage: {card.suture_and_usage} </p>}
            {card.dressings.length > 0 && <p>Dressings: {card.dressings} </p>}
            {card.skin_prep.length > 0 && <p>Skin Prep: {card.skin_prep} </p>}
            {card.medications.length > 0 && <p>Medication: {card.medications} </p>}
          </section>
        </div>
      );
    }
  };
  editButton = () => {
    const id = parseInt(this.props.match.url.split("/").slice(2));
    return (
      <Link to={`/edit/${id}`}>
        <button type="click" >Edit Card</button>
      </Link>
    );
  };
  render() {
    return (
      <div>
        {this.allCardsButton()}
        <LogoutButton />
        {this.findById()}
        {this.editButton()}
        <DeleteButton {...this.props} url={this.props.match.url} />
      </div>
    );
  }
}
