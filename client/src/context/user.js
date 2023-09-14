import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState({ uniq_dest: [] })
    const [loggedIn, setLoggedIn] = useState(false)
    const [reviews, setReviews] = useState([])
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])

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

    const fetchReviews = () => {
        fetch("/reviews")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setReviews(data)
            })
    }


    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
        fetchReviews()
        navigate("/")
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
        <UserContext.Provider value={{ user, errors, setErrors, setUser, login, logout, signup, loggedIn, reviews }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }