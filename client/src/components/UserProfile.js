import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { Button } from '@mobiscroll/react-lite';
import EditReview from './EditReview';
import ReviewCard from './ReviewCard'
import { Link } from 'react-router-dom';

const UserProfile = () => {
    const { user, handleDelete } = useContext(UserContext)
    const { username, } = user

    console.log(user)
    return (
        <div className='container'>
            <p>User:</p>
            <h3>{username}</h3>
            <h3>My destinations: </h3>
            <ul>{user.reviews.map(review => (
                <li>
                    <h3 className='country'>{review.destination.name}</h3>
                    <ReviewCard review={review} />
                    < EditReview key={review.id} review={review} />
                    < Button onClick={() => handleDelete(review.id)}>Delete Review</Button>
                </li>
            ))}</ul>
            <Link to="/destinations">Rate destinations</Link>
        </div>
    )
}

export default UserProfile



