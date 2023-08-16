import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import ReviewCard from './ReviewCard'

const UserProfile = () => {
    const { user } = useContext(UserContext)
    const { username } = user

    const destinationNames = [...new Set(user.destinations.map((destination) => {
        return destination.name
    }))]
    return (
        <div className='container'>
            <p>Our Special User:</p>
            <h3>{username}</h3>
            <hr />
            <p>Visited:</p>
            <div>
                {destinationNames.map(name => {

                    return <p key={name}>{name}</p>
                })}
            </div>
            <div>
                <p>Left reviews:</p>

                {user.reviews.map((review) => {
                    return <ReviewCard key={review.id} review={review} />
                })}
            </div>
        </div>
    )
}

export default UserProfile
