import React, { useContext } from 'react'
import { UserContext } from '../context/user'

const ReviewCard = ({ review }) => {
    console.log(review)

    const { user, } = useContext(UserContext)
    console.log(user)

    return (
        <div>
            <h3>{user.username}</h3>
            <h3 className='reviewList'>Review: {review.review}</h3>
            <h3 className='raings'> Rating: {review.rating}/5</h3>
        </div>
    )
}

export default ReviewCard
