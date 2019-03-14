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
    equipment: "",
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

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.history.push("/all");
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
        <label>
          Glove Type: <s />
          <label htmlFor="small">Small</label>
          <input
            type="radio"
            id="small"
            className="gloveType"
            name="gloveType"
            value="small"
            onChange={e => this.handleChange(e)}
          />
          <label htmlFor="medium">Medium</label>
          <input
            type="radio"
            id="medium"
            className="gloveType"
            name="gloveType"
            value="medium"
            onChange={e => this.handleChange(e)}
          />
          <label htmlFor="large">Large</label>
          <input
            type="radio"
            id="large"
            className="gloveType"
            name="gloveType"
            value="large"
            onChange={e => this.handleChange(e)}
          />
          <br />
        </label>
          <label>
            Dominant Hand: <s />
            <label htmlFor="right">Right</label>
            <input type="radio" id="right" className="dominantHand" name="dominantHand" value="right" onChange={e => this.handleChange(e)} />
            <label htmlFor="left">Left</label>
            <input type="radio" id="left" className="dominantHand" name="dominantHand" value="left" onChange={e => this.handleChange(e)} />
            <br />
          </label>
        Equipment:
        <br />
        <textarea
          rows="4"
          cols="50"
          className="equipment"
          onChange={e => this.handleChange(e)}
        />
        <br />
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
        Suture and usage:
        <br />
        <textarea
          rows="4"
          cols="50"
          className="sutureAndUsage"
          onChange={e => this.handleChange(e)}
        />
        <br />
        Dressings:
        <br />
        <textarea
          rows="4"
          cols="50"
          className="dressings"
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
          className="medications"
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
