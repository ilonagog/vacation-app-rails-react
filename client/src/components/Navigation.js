import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { RxDropdownMenu } from 'react-icons/rx'
import { AiOutlineClose } from "react-icons/ai"
import { UserContext } from '../context/user'
import { useNavigate } from 'react-router-dom'



const Navigation = () => {
    const [menu, setMenu] = useState(false)
    const { user, logout } = useContext(UserContext)
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
    if (user) {
        return (
            <div className="nav">
                <h3>Welcome {user.username}</h3>
                <Link className="home" to="/">Home</Link>
                <Link to="/destinations">Destinations</Link>
                <button onClick={logoutUser}>LogOut</button>
            </div>)
    } else {
        return (
            <div>
                {!menu ?
                    <div onClick={() => setMenu(!menu)} className="menu">
                        <RxDropdownMenu size={30} />
                    </div> :
                    <ul>
                        {/* <li><Link to='/users/1'>User Page</Link></li> */}
                        <li><Link to='/signup'>Sign Up</Link></li>
                        <li><Link to='/login'>Login</Link></li>

                        <li onClick={() => setMenu(!menu)}><AiOutlineClose /></li>
                    </ul>
                }
            </div>
        )
    }
}

export default Navigation;
