import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import ReviewCard from './ReviewCard'

const Reviews = () => {
    const { reviews } = useContext(UserContext)

    const reviewList = reviews.map(reviewOne => <ReviewCard key={reviewOne.key} review={reviewOne} />)
    return (
        <div>
            <ul> {reviewList}</ul>

        </div>
    )
}

export default Reviews
