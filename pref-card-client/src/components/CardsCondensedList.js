import React from 'react';
import ApiService from '../services/api-service';
import CardsContext from '../context/CardsContext';

export default class CardsCondensedList extends React.Component {
    static contextType = CardsContext
    componentDidMount(){
        console.log(this.context)
        ApiService.getAllCards()
            .then(res => console.log(res))
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}