
// import React, { useContext, } from 'react'
// import { UserContext } from '../context/user'
// import { Button } from '@mobiscroll/react-lite';
// import EditReview from './EditReview';
// import ReviewCard from './ReviewCard'

// const UserProfile = () => {
//     const { user, handleDelete } = useContext(UserContext)
//     const { username } = user

//     return (
//         <div className='container'>
//             <p>Our Special User:</p>
//             <h3>{username}</h3>
//             <hr />
//             <p>Visited:</p>
//             <div>
//                 {user.reviews.map((review) => {
//                     return (
//                         <li>
//                             <h2>{review.destination.name}</h2>
//                             <ReviewCard key={review.id} review={review} />
//                             < EditReview review={review} />
//                             < Button onClick={() => handleDelete(review.id)}>Delete Review</Button>
//                         </li>
//                     )
//                 }
//                 )}
//             </div>
//         </div >
//     )
// }

// export default UserProfile

import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/user'
import { Button } from '@mobiscroll/react-lite';
import EditReview from './EditReview';
import ReviewCard from './ReviewCard'
import AddDestinationForm from './AddDestinationForm';
import { Link } from 'react-router-dom';
import Destination from './Destination';

const UserProfile = () => {
    const { user, loggedIn, handleDelete, reviews } = useContext(UserContext)
    const { username } = user
    const [userDestinations, setUserDestinations] = useState([])

    useEffect(() => {
        const myDestinations = user.destinations
        if (myDestinations) {
            setUserDestinations(myDestinations)
        }
    }, [user])

    const destList = userDestinations && userDestinations.map((destination) => (
        <div>
            <Destination />
            <ReviewCard destination_id={destination.id} />
        </div>
    ))


    return loggedIn ? (
        <div className='container'>
            <p>Our Special User:</p>
            <h3>{username}</h3>
            <h1>My destinations</h1>
            <div >{userDestinations?.length > 0 ? (
                <div>{destList}</div>) : (
                <div>
                    <h3>Add your Destination</h3>
                    <Link to={"/destinations/new"}>
                        {<AddDestinationForm />}
                    </Link>

                    <Link to="/destinations">Rate destinations</Link>
                    <ul>
                        <li>

                            {/* <h2>{review.destination.name}</h2> */}
                            {reviews.map = (review => {
                                <div>
                                    <ReviewCard key={review.id} review={review} />
                                    < EditReview review={review} />
                                    < Button onClick={() => handleDelete(review.id)}>Delete Review</Button>
                                </div>
                            }
                            )}
                        </li>
                    </ul>
                </div>
            )
            }

            </div>
        </div>
    ) : (
        <p>Not authorized</p>
    )
}

export default UserProfile
