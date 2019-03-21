import React from "react";
import LogoutButton from "./LogoutButton";
import { Link } from "react-router-dom";
import CardsContext from "../context/CardsContext";
import ApiService from "../services/api-service";

export default class EditForm extends React.Component {
  static contextType = CardsContext;

  //   componentDidMount() {
  //     const id = parseInt(
  //       this.props.match.url
  //         .split("/")
  //         .slice(2)
  //         .join("")
  //     );
  //     const oldCard = this.context.cardsList.find(card => card.id === id);
  //     this.context.addToEditCard(oldCard)
  //   }
  //   getCardToEdit = () => {
  //     const id = parseInt(
  //       this.props.match.url
  //         .split("/")
  //         .slice(2)
  //         .join("")
  //     );
  //     const oldCard = this.context.cardsList.find(card => card.id === id);
  //     this.context.addToEditCard(oldCard);
  //     console.log(this.context.editCard)
  //   };
  generateCard = card => {
    if (!card) {
      return <></>;
    } else {
      return (
        <div id={card.id}>
          <h1>PrefCard</h1>
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
    }
  };
  componentDidMount() {
    const id = parseInt(
      this.props.match.url
        .split("/")
        .slice(2)
        .join("")
    );
    ApiService.getCardById(id).then(res => {
        console.log(res)
        this.context.addToEditCard(res)
        
    });
  }
  render() {
    return (
      <div>
        <Link to="/all">
          <button type="click">Cancel</button>
        </Link>
        <LogoutButton />
        <h1>Edit PrefCard</h1>
      </div>
    );
  }
}
