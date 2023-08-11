import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import ReviewCard from './ReviewCard'

const Reviews = () => {
    const { reviews } = useContext(UserContext)

    const reviewList = reviews.map(review => <ReviewCard key={review.key} review={review} />)
    return (
        <div>
            {reviewList}
        </div>
    )
}

export default Reviews
