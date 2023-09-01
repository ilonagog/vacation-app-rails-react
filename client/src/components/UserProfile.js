import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { Link } from 'react-router-dom';

const UserProfile = () => {
    const { user } = useContext(UserContext)
    const { username } = user
    console.log(user)

    const destinationsList = user.uniq_dest.map((destination, i) => {
        return (
            <div className='list' key={i}>
                <li key={destination.id}>{destination.name}</li>
            </div>
        )

    })

    return (
        <div className='container'>
            <p>Hi!</p>
            <h3>{username} has reviewed :</h3>
            <ul>{destinationsList}</ul>
            <Link to="/destinations">Rate destinations</Link>
        </div>
    )
}

export default UserProfile



