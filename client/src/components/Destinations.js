import React, { useState } from 'react'
import AddDestinationForm from './AddDestinationForm'
import Destination from './Destination'

const Destinations = ({ destinations }) => {
    const [viewForm, setViewForm] = useState(false)

    const destinationsList = destinations.map((destination) => (<Destination key={destination.id} destination={destination} />))

    const handleClick = (e) => {
        setViewForm(true)
        console.log("clicked")
    }
    // const addDestination = (destination) => {
    //     fetch('/destinations', {
    //         method: "POST",
    //         headers: { "Content-type": "application/json" },
    //         body: JSON.stringify({ ...formData })
    //     })
    //         .then(res => {
    //             if (res.ok) {
    //                 res.json().then(addDestination)
    //             } else {
    //                 res.json().then(data => {
    //                     setErrors(Object.entries(data.errors))
    //                 })
    //             }
    //         })
    // }
    return (
        <div>
            <button onClick={handleClick}>Add New Property</button>
            {viewForm ?
                <AddDestinationForm setViewForm={setViewForm} />
                :
                <ul>{destinationsList}</ul>
            }
        </div>

    )
}

export default Destinations;

