

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
        <UserContext.Provider value={{ user, login, logout, signup, loggedIn, reviews }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }