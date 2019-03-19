import React, { Component } from "react";
import { Route } from "react-router";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import CardById from "./components/CardById";
import CardsList from "./components/CardsList";
import AddCardForm from "./components/AddCardForm";
import ApiService from "./services/api-service";
import CardsContext from "./context/CardsContext";

class App extends Component {
  state = {
    allCards: []
  };
  componentDidMount() {
    ApiService.getAllCards().then(data => this.setState({ allCards: data }));
  }
  render() {
    return (
      <CardsContext.Provider>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" render={props => <Login {...props} />} />
          <Route
            exact
            path="/register"
            render={props => <Register {...props} />}
          />
          <Route
            exact
            path="/card/:id"
            render={props => (
              <CardById {...props} store={this.state.allCards} />
            )}
          />
          <Route
            exact
            path="/all"
            render={props => (
              <CardsList {...props} store={this.state.allCards} />
            )}
          />
          <Route
            exact
            path="/create-card"
            render={props => <AddCardForm {...props} />}
          />
        </div>
      </CardsContext.Provider>
    );
  }
}

export default App;
