import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import ReviewCard from './ReviewCard'

const UserProfile = () => {
    const { user } = useContext(UserContext)
    const { username } = user
    return (
        <div>
            <p>Our Special User:</p>
            <h3>{username}</h3>
            <hr />
            <p>Left reviews:</p>
            {user.reviews.map(reviewOne =>
                <ReviewCard key={reviewOne.id} review={reviewOne} />)}
        </div>
    )
}

export default UserProfile
