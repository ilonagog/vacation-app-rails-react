import React from 'react'
import Destination from './Destination'

const Destinations = ({ destinations }) => {

    const destinationsList = destinations.map((destination) => (<Destination key={destination.id} destination={destination} />))

    return (
        <ul> {destinationsList} </ul>
    )
}

export default Destinations;

