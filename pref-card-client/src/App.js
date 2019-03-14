import React, { Component } from "react";
import { Route } from "react-router";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import CardById from './components/CardById';
import CardsList from './components/CardsList';
import AddCardForm from "./components/AddCardForm";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route 
          exact path="/login" 
          render={(props) => <Login {...props}/>} />
        <Route 
          exact path="/register" 
          render={(props) => <Register {...props} />} />
        <Route exact path="/card/1" component={CardById} />
        <Route exact path="/all" component={CardsList} />
        <Route 
          exact path="/create-card" 
          render={(props) => <AddCardForm {...props} />}
          /> 
      </div>
    );
  }
}

export default App;
