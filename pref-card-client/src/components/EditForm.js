import React from "react";
import LogoutButton from "./LogoutButton";
import { Link } from "react-router-dom";
import CardsContext from "../context/CardsContext";

export default class EditForm extends React.Component {
  static contextType = CardsContext;
  state = {
    cardById: {}
  };
  findCardById = () => {
    const id = parseInt(this.props.match.url.split("/").slice(2));
    const cardById = this.context.cardsList.find(card => card.id === id);
    return this.generateForm(cardById);
  };
  // Need to populate select dropdowns with default values. Through ternary?
  generateForm = card => {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        Surgeon: {card.surgeon}
        <br />
        Procedure:
        <br />
        <textarea
          rows="4"
          cols="50"
          className="procedure"
          name="procedure"
          defaultValue={card.procedure}
        />
        <br />
        Position:
        <br />
        <textarea
          rows="4"
          cols="50"
          className="position"
          name="position"
          defaultValue={card.position}
        />
        <br />
        Glove Size:
        <select
          className="gloveSize"
          name="glove_size"
          defaultValue={card.glove_size}
        >
          <option>6</option>
          <option>6.5</option>
          <option>7</option>
          <option>7.5</option>
          <option>8</option>
          <option>8.5</option>
        </select>
        <br />
        <label>
          Glove Type: <s />
          <label htmlFor="small">Small</label>
          {card.glove_type === "small" ? (
            <input
              type="radio"
              id="small"
              className="gloveType"
              value="small"
              name="glove_type"
              defaultChecked
            />
          ) : (
            <input
              type="radio"
              id="small"
              className="gloveType"
              value="small"
              name="glove_type"
            />
          )}
          <label htmlFor="medium">Medium</label>
          {card.glove_type === "medium" ? (
            <input
              type="radio"
              id="medium"
              className="gloveType"
              name="glove_type"
              value="medium"
              defaultChecked
            />
          ) : (
            <input
              type="radio"
              id="medium"
              className="gloveType"
              name="glove_type"
              value="medium"
            />
          )}
          <label htmlFor="large">Large</label>
          {card.glove_type === "large" ? (
            <input
              type="radio"
              id="large"
              className="gloveType"
              name="glove_type"
              value="large"
              defaultChecked
            />
          ) : (
            <input
              type="radio"
              id="large"
              className="gloveType"
              name="glove_type"
              value="large"
            />
          )}
          <br />
        </label>
        <label>
          Dominant Hand: <s />
          <label htmlFor="right">Right</label>
          {card.dominant_hand === "right" ? (
            <input
              type="radio"
              id="right"
              className="dominantHand"
              name="dominant_hand"
              value="right"
              defaultChecked
            />
          ) : (
            <input
              type="radio"
              id="right"
              className="dominantHand"
              name="dominant_hand"
              value="right"
            />
          )}
          <label htmlFor="left">Left</label>
          {card.dominant_hand === "left" ? (
            <input
              type="radio"
              id="left"
              className="dominantHand"
              name="dominant_hand"
              value="left"
              defaultChecked
            />
          ) : (
            <input
              type="radio"
              id="left"
              className="dominantHand"
              name="dominant_hand"
              value="left"
            />
          )}
          <br />
        </label>
        Equipment:
        <br />
        <textarea
          rows="4"
          cols="50"
          className="equipment"
          name="equipment"
          defaultValue={card.equipment}
        />
        <br />
        Supplies:
        <br />
        <textarea
          rows="4"
          cols="50"
          className="supplies"
          name="supplies"
          defaultValue={card.supplies}
        />
        <br />
        Instrumentation:
        <br />
        <textarea
          rows="4"
          cols="50"
          className="instrumentation"
          name="instrumentation"
          defaultValue={card.instrumentation}
        />
        <br />
        Suture and usage:
        <br />
        <textarea
          rows="4"
          cols="50"
          className="sutureAndUsage"
          name="suture_and_usage"
          defaultValue={card.suture_and_usage}
        />
        <br />
        Dressings:
        <br />
        <textarea
          rows="4"
          cols="50"
          className="dressings"
          name="dressings"
          defaultValue={card.dressings}
        />
        <br />
        Skin Prep:
        <br />
        <textarea
          rows="4"
          cols="50"
          className="skinPrep"
          name="skin_prep"
          defaultValue={card.skin_prep}
        />
        <br />
        Medication:
        <br />
        <textarea
          rows="4"
          cols="50"
          className="medications"
          name="medications"
          defaultValue={card.medications}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  };
  render() {
    return (
      <div>
        <Link to="/all">
          <button type="click">Cancel</button>
        </Link>
        <LogoutButton />
        <h1>Edit PrefCard</h1>
        {this.findCardById()}
      </div>
    );
  }
}
