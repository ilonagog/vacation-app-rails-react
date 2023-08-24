import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
    const [reviews, setReviews] = useState([])
    const navigate = useNavigate()
    // const [currentUser, setCurrentUser] = useState(false)
    // const updatedUser = (user) => setCurrentUser(user)
    // console.log(currentUser)


    useEffect(() => {
        fetch('/me')
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setLoggedIn(false)

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


    function handleDelete(reviewId) {
        fetch(`/reviews/${reviewId}`, {
            method: "DELETE"
        })
            .then(() => {
                const updatedReviews = reviews.filter(review => review.id !== reviewId)
                const updatedUser = { ...user, reviews: updatedReviews }
                setUser(updatedUser)
                // navigate("/destinations")
            })
    }

    function handleEdit(review, input) {
        fetch(`/reviews/${review.id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(input),
        })
            .then(r => r.json())
            .then(editedReview => {
                onEdit(editedReview)

                navigate("/destinations")
            })
    }

    const onEdit = (updatedReviews) => {

        const reviewUpdated = [...reviews].filter(review => review.id !== updatedReviews.id)
        const updatedR = [...reviewUpdated, updatedReviews]
        setUser(updatedR)
    }


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
        <UserContext.Provider value={{ user, setUser, login, logout, signup, loggedIn, reviews, handleDelete, handleEdit }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }