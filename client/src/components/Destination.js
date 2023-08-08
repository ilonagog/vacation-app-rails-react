import React from 'react'
import Card from 'styled-components'
import { Link } from 'react-router-dom'

const Destination = ({ destination }) => {
    const { name, location, image, description, price, id } = destination
    console.log(destination)
    return (
        <Card>
            <Link to={`/destinations/${id}`}><h3>{name}</h3></Link>
            <p>{location}</p>
            <img src={image} alt={image} />
            <p>{description}</p>
            <p>{price}</p>
        </Card>
    )
}

export default Destination
