
import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { Button } from '@mobiscroll/react-lite';
import EditReview from './EditReview';
import ReviewCard from './ReviewCard'

const UserProfile = ({ updatedUser }) => {
    const { user, handleDelete } = useContext(UserContext)
    const { username } = user

    return (
        <div className='container'>
            <p>Our Special User:</p>
            <h3>{username}</h3>
            <hr />
            <p>Visited:</p>
            <div>
                {user.reviews.map((review) => {
                    return (
                        <li>
                            <h2>{review.destination.name}</h2>
                            <ReviewCard key={review.id} review={review} />
                            < EditReview review={review} />
                            < Button onClick={() => handleDelete(review.id)}>Delete Review</Button>
                        </li>
                    )
                }
                )}
            </div>
        </div >
    )
}

export default UserProfile
