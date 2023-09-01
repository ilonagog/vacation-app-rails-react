import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState({ uniq_dest: [] })
    const [loggedIn, setLoggedIn] = useState(false)
    const [reviews, setReviews] = useState([])
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])

    // const [currentUser, setCurrentUser] = useState({ reviews: [] })
    // const updatedUser = (user) => setCurrentUser(user)
    // console.log(currentUser)


    useEffect(() => {
        fetch('/me')
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setLoggedIn(false)
                    // setCurrentUser({})

                } else {
                    setLoggedIn(true)
                    setUser(data)
                    fetchReviews(data.reviews)
                }
            })
    }, [])
    console.log(user)

    const fetchReviews = () => {
        fetch("/reviews")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
    }


    // const onDeleteReview = (deletedReview) => {
    //     const onDestination = destinations.find((destination) => destination.id === deletedReview.destination_id)
    //     const newDestinationReviews = onDestination.reviews.filter((review) => review.id !== deletedReview.id)
    //     const updatedDestination = { ...onDestination, reviews: newDestinationReviews }
    //     const updatedDestinations = destinations.map((destination) => destination.id === updatedDestination.id ? updatedDestination : destination)
    //     setDestinations(updatedDestinations)
    //     const newUserReviewList = user.reviews.filter((review) => review.id !== deletedReview.id)
    //     setUser((prevUser) => ({ ...prevUser, reviews: newUserReviewList }))
    //     const userReviewList = updatedDestination.reviews.find((review) => review.user_id === user.id)
    //     if (!userReviewList) {
    //         const newUserDestinations = user.destinations.filter((destination) => destination.id != deletedReview.destination_id)
    //         setUser({ ...user, destinations: newUserDestinations })
    //         navigate(`/destinations`)
    //     }
    // }
    // function handleDelete(deletedReview) {
    //     fetch(`/reviews/${deletedReview.id}`, {
    //         method: "DELETE"
    //     })
    //         .then(() => {
    //             const onDestination = Destinations
    //             // const updatedReviews = reviews.filter(review => review.id !== deletedReview.id)
    //             // const updatedUser = { ...user, reviews: updatedReviews }
    //             // setUser(updatedUser)
    //             // setDestinations(updatedReviews)
    //             navigate("/destinations")
    //         })
    // }

    // const updatedReviewsArray = (reviews, updatedReview) => {
    //     const updatedReviews = reviews.map(review => {
    //         if (review.id === updatedReview.id) {
    //             return updatedReview
    //         }
    //         return review
    //     })
    //     return updatedReviews

    // }
    // const onEditReview = (editedReview) => {
    //     const onDestination = destinations.find((destination) => destination.id == editedReview.destination_id);
    //     const updatedDestinationReviews = onDestination.reviews.map((review) => review.id === editedReview.id ? editedReview : review);
    //     const updatedDestination = { ...onDestination, reviews: updatedDestinationReviews };
    //     const updatedDestinations = destinations.map((destination) => destination.id === updatedDestination.id ? updatedDestination : destination);
    //     setDestinations(updatedDestinations);
    //     const updatedUserReviews = user.reviews.map((review) => review.id === editedReview.id ? editedReview : review);
    //     setUser({ ...user, reviews: updatedUserReviews })
    // }

    // function handleEdit(review, input) {
    //     fetch(`/reviews/${review.id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             review: review.review,
    //             rating: review.rating,
    //             destination_id: useParams.id
    //         }),
    //     })
    //         .then(r => r.json())
    //         .then((data) => {
    //             onEditReview(data)

    //         })
    // }
    //         .then(updatedReview => {
    //             const newReviewsArray = [...user.reviews].filter(review => review.id !== updatedReview.id)
    //             const updatedReviews = [...newReviewsArray, updatedReview]
    //             setUser(user => {
    //                 return { ...user, reviews: updatedReviews }
    //             })
    //         })

    // }


    // editedReview => {
    //     console.log('updated data from server:', editedReview)
    //     // onEdit(editedReview)
    //     const updatedRevires = user.reviews.map(review => review.id === editedReview.id ? editedReview : review);
    //     console.log(updatedRevires)
    //     const updatedUser = { ...user, reviews: updatedRevires }
    //     // (updatedReviews) => {
    //     // const reviewUpdated = [...reviews].filter(review => review.id !== updatedReviews.id)
    //     // const updatedR = [...reviewUpdated, updatedReviews]
    //     setUser(updatedUser)
    //     navigate("/destinations")
    // })





    const login = (user) => {
        // setCurrentUser(currentUser)
        setUser(user)
        setLoggedIn(true)
        fetchReviews()
        navigate("/destinations")
    }

    const logout = () => {
        setUser({})
        // setCurrentUser({})
        setLoggedIn(false)
    }

    const signup = (user) => {
        // setCurrentUser(currentUser)
        setUser(user)
        setLoggedIn(true)
    }
    // console.log(user)

    return (
        <UserContext.Provider value={{ user, errors, setErrors, setUser, login, logout, signup, loggedIn, reviews }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }