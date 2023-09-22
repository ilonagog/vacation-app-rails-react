import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { Link } from 'react-router-dom';
import { Button } from '@mobiscroll/react-lite';

const UserProfile = () => {
    const { user } = useContext(UserContext)
    const { username } = user

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
            <Link to="/destinations"><Button>Rate destinations</Button></Link>
        </div>
    )
}

export default UserProfile



