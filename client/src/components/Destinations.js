import React, { useState } from 'react'
import AddDestinationForm from './AddDestinationForm'
import Destination from './Destination'

const Destinations = ({ destinations, setDestinations }) => {
    const [viewForm, setViewForm] = useState(false)

    const destinationsList = destinations.map((destination) => (<Destination key={destination.id} destination={destination} />))

    const handleClick = (e) => {
        setViewForm(true)
        console.log("clicked")
    }
    return (
        <div>
            <button onClick={handleClick}>Add New Property</button>
            {viewForm ?
                <AddDestinationForm />
                :
                <ul>{destinationsList}</ul>
            }
        </div>

    )
}

export default Destinations;

