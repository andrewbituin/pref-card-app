import React, { Component } from "react";
import { Route } from "react-router";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import CardById from "./components/CardById";
import CardsList from "./components/CardsList";
import AddCardForm from "./components/AddCardForm";
import { CardsContextProvider } from "./context/CardsContext";
import PrivateRoute from './components/Utils/PrivateRoute';

class App extends Component {
  render() {
    return (
      <CardsContextProvider>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" render={props => <Login {...props} />} />
          <Route
            exact
            path="/register"
            render={props => <Register {...props} />}
          />
          <PrivateRoute
            exact
            path="/card/:id"
            component={CardById}
          />
          <PrivateRoute
            exact
            path="/all"
            component={CardsList} 
            />
          <PrivateRoute
            exact
            path="/create-card"
            component={AddCardForm}
          />
        </div>
      </CardsContextProvider>
    );
  }
}

export default App;
