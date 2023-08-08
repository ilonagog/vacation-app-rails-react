import React from 'react'
import { Link, NavLink } from 'react-router-dom'




const Navigation = () => {
    return (
        <NavLink>
            <Link to="/">Home</Link>
            <Link to="/destinations">Destinations</Link>
        </NavLink>
    )
}

export default Navigation;
