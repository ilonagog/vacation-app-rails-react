import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import ReviewCard from './ReviewCard'
import { Button } from '@mobiscroll/react-lite';
import EditReview from './EditReview';


const UserProfile = () => {
    const { user, handleDelete, handleEdit, reviews } = useContext(UserContext)
    const { username } = user

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
                            {/* {viewForm ? */}
                            <EditReview handleEdit={handleEdit} review={reviews} />
                            {/* //     :
                            //     <Button onClick={() => handleEdit(review.id)}>Edit review</Button>
                            // */}
                            <Button onClick={() => handleDelete(review.id)}>Delete Review</Button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UserProfile
