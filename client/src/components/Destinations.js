import { Button } from '@mobiscroll/react-lite'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AddDestinationForm from './AddDestinationForm'
import Destination from './Destination'

const Destinations = ({ destinations, addDestination }) => {
    const [viewForm, setViewForm] = useState(false)

    const destinationsList = destinations.map((destination) => (<Destination key={destination.id} destination={destination} />))

    const handleClick = (e) => {
        setViewForm(true)
        console.log("clicked")
    }
    return (
        <div>
            <Link to="/destinations/new"> <Button onClick={handleClick}>Add New Property</Button></Link>
            {viewForm ?
                <AddDestinationForm setViewForm={setViewForm} addDestination={addDestination} />
                :
                <ul>{destinationsList}</ul>
            }
        </div>
    )
}

export default Destinations;

