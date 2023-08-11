

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)
    const [reviews, setReviews] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch('/me')
            .then(res => res.json())
            .then(data => {
                setUser(data)
                if (data.error) {
                    setLoggedIn(false)
                } else {
                    setLoggedIn(true)
                    fetchReviews()
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
    console.log(reviews)

    const addReview = (formData, destinationId) => {
        fetch(`/destinations/${destinationId}/reviews`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(data => {
                setReviews([...reviews, data])
                navigate('/reviews')
            })

    }

    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
        navigate("/destinations")
        fetchReviews()


    }

    const logout = () => {
        setUser({})
        setLoggedIn(false)

    }

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true)
    }
    return (
        <UserContext.Provider value={{ user, login, logout, signup, loggedIn, reviews, addReview }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }