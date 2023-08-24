import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { Button } from '@mobiscroll/react-lite';
import EditReview from './EditReview';
import ReviewCard from './ReviewCard'
import { Link } from 'react-router-dom';
import Destination from './Destination';

const UserProfile = () => {
    const { user, handleDelete } = useContext(UserContext)
    const { username, } = user
    //  const reviews = user.reviews

    // const { rating, username, name } = review

    console.log(user)
    return (
        <div className='container'>
            <p>Our Special User:</p>
            <h3>{username}</h3>
            <h3>My destinations</h3>
            <ul>{user.reviews.map(review => (
                <li>
                    <h3>{review.destination.name}</h3>
                    <ReviewCard key={review.id} review={review} />
                    < EditReview review={review} />
                    < Button onClick={() => handleDelete(review.id)}>Delete Review</Button>
                </li>
            ))}</ul>
            <Link to="/destinations">Rate destinations</Link>
        </div>
    )




}

export default UserProfile



