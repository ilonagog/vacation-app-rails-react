

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
    const [reviews, setReviews] = useState([])
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useState(false)

    const updatedUser = (user) => setCurrentUser(user)
    console.log(currentUser)

    useEffect(() => {
        fetch('/me')
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setLoggedIn(false)
                    setCurrentUser({})
                } else {
                    setLoggedIn(true)
                    setCurrentUser(data)
                    fetchReviews(data.reviews)
                }
            })
    }, [])

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
                setReviews(updatedReviews)
            })
    }

    function handleEdit(reviewId, updatedInfo) {
        fetch(`/reviews/${reviewId}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(updatedInfo),
        })
            .then(r => r.json())
            .then(editedReview => {
                onEdit(editedReview)
                navigate("/destinations")
            })
    }

    const onEdit = (updatedReviews) => {
        const reviewUpdated = [...reviews].filter(res => res.id !== updatedReviews.id)
        const updatedR = [...reviewUpdated, updatedReviews]
        setReviews(updatedR)
    }


    const login = (currentUser) => {
        setCurrentUser(currentUser)
        // setUser(user)
        setLoggedIn(true)
        fetchReviews()
        navigate("/destinations")
    }

    const logout = () => {
        // setUser({})
        setCurrentUser({})
        setLoggedIn(false)
    }

    const signup = (currentUser) => {
        setCurrentUser(currentUser)
        // setUser(user)
        setLoggedIn(true)
    }
    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser, user, updatedUser, setUser, login, logout, signup, loggedIn, reviews, handleDelete, handleEdit }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }