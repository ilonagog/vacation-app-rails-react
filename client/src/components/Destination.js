import React from 'react'
import { Link } from 'react-router-dom'

const Destination = ({ destination }) => {
    const { name, location, image, description, price, id } = destination
    console.log(destination)
    return (
        <div>
            <ul>
                <Link to={`/destination/${id}`}> <h3>{name}</h3></Link>
                <p>{location}</p>
                <img src={image} alt={image} />
                <p>{description}</p>
                <p>{price}</p>
            </ul>
        </div>

    )
}

export default Destination
