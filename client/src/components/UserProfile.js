import React, { useContext, useState } from 'react'
import { UserContext } from '../context/user'
import ReviewCard from './ReviewCard'
import { Button } from '@mobiscroll/react-lite';
import EditReview from './EditReview';


const UserProfile = () => {
    const { user, handleDelete, handleEdit } = useContext(UserContext)
    const { username } = user
    const [viewForm, setViewForm] = useState(false)

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
                    return (

                        <div>
                            <ReviewCard key={review.id} review={review} />
                            {viewForm ?
                                <Button onClick={() => handleEdit(review.id)}>Edit review</Button>
                                : <EditReview />
                            }
                            <Button onClick={() => handleDelete(review.id)}>Delete Review</Button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UserProfile
