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
    render() {
        const value = {
            cardsList: this.state.cardsList,
            error: this.state.error,
            setCardsList: this.setCardsList,
            setError: this.setError,
            clearError: this.clearError
        }
        return (
            <CardsContext.Provider value={value}>
                {this.props.children}
            </CardsContext.Provider>
        )
    }
}