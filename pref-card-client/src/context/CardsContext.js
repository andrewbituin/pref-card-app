import React from 'react';

const CardsContext = React.createContext({
    cardsList: [],
    error: null
})

export default CardsContext 

export class CardsContextProvider extends React.Component {
    state = {
        cardsList: [],
        error: null
    }
    setCardsList = cardsList => {
        this.setState({ cardsList })
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
    render() {
        const value = {
            cardsList: this.state.cardsList,
            error: this.state.error,
            setCardsList: this.setCardsList,
            setError: this.setError,
            clearError: this.clearError,
            deleteCardFromList: this.deleteCardFromList
        }
        return (
            <CardsContext.Provider value={value}>
                {this.props.children}
            </CardsContext.Provider>
        )
    }
}