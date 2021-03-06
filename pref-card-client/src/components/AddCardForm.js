import React from "react";
import { Link } from "react-router-dom";
import ApiService from "../services/api-service";
import CardsContext from "../context/CardsContext";
import LogoutButton from "./LogoutButton";

export default class AddCardForm extends React.Component {
  static contextType = CardsContext

  state = {
    error: false
  }

  handleSubmit = e => {
    e.preventDefault();
    const obj = {};
    const form = new FormData(e.target);
    form.forEach((val, key) => (obj[key] = val));
 
    const user = this.context.usersList.find(user => user.full_name === obj.surgeon)
    obj.user_id = user.id
    ApiService.postCard(JSON.stringify(obj))
      .then(res => console.log(res) )
      .then(this.context.addCard(obj))
      .then(() => this.props.history.push('/all'))
  };

  generateOptions = () => {
    const surgeons = this.context.usersList.filter(user => user.position === 'doctor')
    return surgeons.map(surgeon => {
      return (
        <option key={surgeon.id}>{surgeon.full_name}</option>
      )
    })
  }
  generateForm = () => {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        Surgeon:
        <select className="surgeon" name="surgeon">
          {this.generateOptions()}
        </select>
        <br />
        Procedure:
        <br />
        <textarea rows="4" cols="50" className="procedure" name="procedure"/>
        <br />
        Position:
        <br />
        <textarea rows="4" cols="50" className="position" name="position" />
        <br />
        Glove Size:
        <select className="gloveSize" name="glove_size">
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
          <input
            type="radio"
            id="small"
            className="gloveType"
            value="small"
            name="glove_type"
            defaultChecked
          />
          <label htmlFor="medium">Medium</label>
          <input
            type="radio"
            id="medium"
            className="gloveType"
            name="glove_type"
            value="medium"
          />
          <label htmlFor="large">Large</label>
          <input
            type="radio"
            id="large"
            className="gloveType"
            name="glove_type"
            value="large"
          />
          <br />
        </label>
        <label>
          Dominant Hand: <s />
          <label htmlFor="right">Right</label>
          <input
            type="radio"
            id="right"
            className="dominantHand"
            name="dominant_hand"
            value="right"
            defaultChecked
          />
          <label htmlFor="left">Left</label>
          <input
            type="radio"
            id="left"
            className="dominantHand"
            name="dominant_hand"
            value="left"
          />
          <br />
        </label>
        Equipment:
        <br />
        <textarea rows="4" cols="50" className="equipment" name="equipment" />
        <br />
        Supplies:
        <br />
        <textarea rows="4" cols="50" className="supplies" name="supplies" />
        <br />
        Instrumentation:
        <br />
        <textarea
          rows="4"
          cols="50"
          className="instrumentation"
          name="instrumentation"
        />
        <br />
        Suture and usage:
        <br />
        <textarea
          rows="4"
          cols="50"
          className="sutureAndUsage"
          name="suture_and_usage"
        />
        <br />
        Dressings:
        <br />
        <textarea rows="4" cols="50" className="dressings" name="dressings" />
        <br />
        Skin Prep:
        <br />
        <textarea rows="4" cols="50" className="skinPrep" name="skin_prep" />
        <br />
        Medication:
        <br />
        <textarea
          rows="4"
          cols="50"
          className="medications"
          name="medications"
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
        <header>
          <h1>New PrefCard</h1>
        </header>
        {this.generateForm()}
      </div>
    );
  }
}
