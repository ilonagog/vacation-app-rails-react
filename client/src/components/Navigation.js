import React from 'react'
import { Link } from 'react-router-dom'




const Navigation = () => {
    return (
        <div>
            <Link className="home" to="/">Home</Link>
            <Link to="/destinations">Destinations</Link>
        </div>
    )
}

export default Navigation;
