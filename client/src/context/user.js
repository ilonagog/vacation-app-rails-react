

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
                console.log(data)
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
    // console.log(reviews)
    const addReview = (input, id) => {
        // const { id } = useParams()
        // id = parseInt(id)
        fetch(`/destinations/${id}/reviews`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                'Content-type': 'application/json'
            },
            body: JSON.stringify(input)
        })
            .then(r => r.json())
            .then(data => {
                console.log(data)
                setReviews([...reviews, data])
                navigate('/destinations')
            })
    }




    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
        fetchReviews()
        navigate("/destinations")


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
        <UserContext.Provider value={{ user, setUser, login, logout, signup, loggedIn, reviews, addReview }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }