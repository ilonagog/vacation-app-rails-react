import React, { useContext } from 'react'
import { UserContext } from '../context/user'

const ReviewCard = ({ review }) => {

    const { user } = useContext(UserContext)


    return (
        <div>
            <h3>{user.username}</h3>
            <p>Review: {review.review}</p>
            <p> Rating: {review.rating}</p>
        </div>
    )
}

export default ReviewCard
