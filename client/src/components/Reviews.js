import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import ReviewCard from './ReviewCard'

const Reviews = () => {
    const { reviews, handleDelete } = useContext(UserContext)

    const reviewList = reviews.map(review => <ReviewCard key={review.key} review={review} handleDelete={handleDelete} />)
    return (
        <div>
            <ul> {reviewList}</ul>

        </div>
    )
}

export default Reviews
