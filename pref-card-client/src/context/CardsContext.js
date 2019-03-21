import React from 'react';

const CardsContext = React.createContext({
    usersList: [],
    cardsList: [],
    error: null
})

export default CardsContext 

export class CardsContextProvider extends React.Component {
    state = {
        usersList: [],
        cardsList: [],
        error: null
    }
    setCardsList = cardsList => {
        this.setState({ cardsList })
    }
    setUsersList = usersList => {
        this.setState({ usersList })
    }
    setError = error => {
        console.error(error)
        this.setState({ error })
    }
    clearError = () => {
        this.setState({ error: null })
    }
    deleteCardFromList = id => {
        const newCardsList = [...this.state.cardsList]
        const updatedList = newCardsList.filter(card => card.id !== id)
        this.setState({ cardsList : updatedList})
    }
    addCard = card => {
        this.setState([...this.state.cardsList, card])
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
            setUsersList: this.setUsersList
        }
        return (
            <CardsContext.Provider value={value}>
                {this.props.children}
            </CardsContext.Provider>
        )
    }
}