import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { Link } from 'react-router-dom';

const UserProfile = () => {
    const { user } = useContext(UserContext)
    const { username } = user
    console.log(user)

    // const reviews = user.reviews.map(review => {
    //     return <li key={review.id}>{review}</li>
    // })
    const destinationsList = user.destinations.map(destination => {
        return (
            <h3 key={destination.id}>{destination.name}</h3>
        )
    })

    return (
        <div className='container'>
            <p>User:</p>
            <h3>{username} has reviewed</h3>
            {destinationsList}

            {/* <ul>{user.destinations.map(destination => (
                <li>
                    <h3>{destination.name}</h3>
                </li>
            ))}</ul> */}
            <Link to="/destinations">Rate destinations</Link>
        </div>
    )
}

export default UserProfile



