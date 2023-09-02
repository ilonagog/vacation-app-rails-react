import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/user'
import { useNavigate } from 'react-router-dom'
import { RxDropdownMenu } from 'react-icons/rx'
import { AiOutlineClose } from "react-icons/ai"
import { BiSolidUserAccount } from 'react-icons/bi'

const Navigation = () => {
    const [menu, setMenu] = useState(false)
    const { logout, loggedIn } = useContext(UserContext)
    const navigate = useNavigate()
    const logoutUser = () => {
        fetch("/logout", {
            method: "DELETE"
        })
            .then(() => {
                logout()
            })
        navigate('/')
    }

    if (loggedIn) {
        return (
            <div className="nav">
                <Link className="home" to="/">Home</Link>
                <Link className="destinations" to="/destinations">Destinations</Link>
                <Link className='aboutUs' to="/about">About Us</Link>
                {!menu ?
                    <div onClick={() => setMenu(!menu)} className="menu">
                        <RxDropdownMenu size={30} />
                    </div> :
                    <ul>
                        <li><Link to="/users/destinations">Profile</Link></li>
                        <button className="logout" onClick={logoutUser}>LogOut</button>
                        <li onClick={() => setMenu(!menu)}><AiOutlineClose /></li>
                    </ul>
                }
            </div>
        )
    }
    else {
        return (
            <div className="nav">
                <Link className="home" to="/">Home</Link>
                <Link className="destinations" to="/destinations">Destinations</Link>
                <Link className='aboutUs' to="/about">About Us</Link>
                {!menu ?
                    <div onClick={() => setMenu(!menu)} className="menu">
                        <RxDropdownMenu size={30} />
                    </div> :
                    <ul>
                        <li><Link to='/signup'>Sign Up</Link></li>
                        <li><Link to='/login'>{BiSolidUserAccount} User login</Link></li>
                        <li onClick={() => setMenu(!menu)}><AiOutlineClose /></li>
                    </ul>
                }
            </div >
        )
    }
}

export default Navigation;
