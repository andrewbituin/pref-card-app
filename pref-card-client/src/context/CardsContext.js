import React from "react";

const CardsContext = React.createContext({
  usersList: [],
  cardsList: [],
  editCard: {},
  error: null
});

export default CardsContext;

export class CardsContextProvider extends React.Component {
  state = {
    usersList: [],
    cardsList: [],
    editCard: {},
    error: null
  };
  setCardsList = cardsList => {
    this.setState({ cardsList });
  };
  setUsersList = usersList => {
    this.setState({ usersList });
  };
  setError = error => {
    console.error(error);
    this.setState({ error });
  };
  clearError = () => {
    this.setState({ error: null });
  };
  deleteCardFromList = id => {
    const newCardsList = [...this.state.cardsList];
    const updatedList = newCardsList.filter(card => card.id !== id);
    this.setState({ cardsList: updatedList });
  };
  addCard = card => {
    this.setState([...this.state.cardsList, card]);
  };
  addToEditCard = (editCard) => {
    this.setState({ editCard })
  }
  render() {
    const value = {
      cardsList: this.state.cardsList,
      usersList: this.state.usersList,
      error: this.state.error,
      setCardsList: this.setCardsList,
      setError: this.setError,
      clearError: this.clearError,
      deleteCardFromList: this.deleteCardFromList,
      addCard: this.addCard,
      setUsersList: this.setUsersList,
      addToEditCard: this.addToEditCard,
      editCard: this.editCard
    };
    return (
      <CardsContext.Provider value={value}>
        {this.props.children}
      </CardsContext.Provider>
    );
  }
}
