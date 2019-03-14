import React from "react";
import { Link } from "react-router-dom";

export default class AddCardForm extends React.Component {
  state = {
    surgeon: "",
    procedure: "",
    position: "",
    gloveSize: null,
    gloveType: "",
    dominantHand: "",
    supplies: "",
    instrumentation: "",
    sutureAndUsage: "",
    dressings: "",
    skinPrep: "",
    medications: ""
  };

  handleChange = e => {
    const stateProperty = e.target.className;
    this.setState({ [stateProperty]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  generateForm = () => {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        Surgeon:
        <br />
        <input
          type="text"
          className="surgeon"
          onChange={e => this.handleChange(e)}
        />
        <br />
        Procedure:
        <br />
        <textarea
          rows="4"
          cols="50"
          className="procedure"
          onChange={e => this.handleChange(e)}
        />
        <br />
        Position:
        <br />
        <textarea
          rows="4"
          cols="50"
          className="position"
          onChange={e => this.handleChange(e)}
        />
        <br />
        <select className="gloveSize" onChange={e => this.handleChange(e)}>
          <option>Glove Size</option>
          <option>6</option>
          <option>6.5</option>
          <option>7</option>
          <option>7.5</option>
          <option>8</option>
          <option>8.5</option>
        </select>
        <br />
        <div className="gloveType" onChange={e => this.handleChange(e)}>
          <label>
            Glove Type: <s />
            <label htmlFor="small">Small</label>
            <input type="radio" id="small" name="gloveType" value="small" />
            <label htmlFor="medium">Medium</label>
            <input type="radio" id="medium" name="gloveType" value="medium" />
            <label htmlFor="large">Large</label>
            <input type="radio" id="large" name="gloveType" value="large" />
            <br />
          </label>
        </div>
        <div className="dominantHand" onChange={e => this.handleChange(e)}>
          <label>
            Dominant Hand: <s />
            <label htmlFor="right">Right</label>
            <input type="radio" id="right" name="dominantHand" value="right" />
            <label htmlFor="left">Left</label>
            <input type="radio" id="left" name="dominantHand" value="left" />
            <br />
          </label>
        </div>
        Supplies:
        <br />
        <textarea
          rows="4"
          cols="50"
          className="supplies"
          onChange={e => this.handleChange(e)}
        />
        <br />
        Instrumentation:
        <br />
        <textarea
          rows="4"
          cols="50"
          className="instrumentation"
          onChange={e => this.handleChange(e)}
        />
        <br />
        Skin Prep:
        <br />
        <textarea
          rows="4"
          cols="50"
          className="skinPrep"
          onChange={e => this.handleChange(e)}
        />
        <br />
        Medication:
        <br />
        <textarea
          rows="4"
          cols="50"
          className="medication"
          onChange={e => this.handleChange(e)}
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
        <Link to="/">
          <button type="click">Log Out</button>
        </Link>
        <header>
          <h1>New PrefCard</h1>
        </header>
        {this.generateForm()}
      </div>
    );
  }
}
