import React, { useContext } from 'react'
import { UserContext } from '../context/user'


const Home = () => {
    const { user, loggedin } = useContext(UserContext)
    if (loggedin) {
        return (<hi>Welcome {user.username}</hi>)
    } else {

        return (
            <div className='home'>
                <img width="100%" height="20%" src="https://images.unsplash.com/photo-1633511090690-0b7f2fec0e8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="vacation" />
                <div className='centered'>
                    Welcome !
                    Explore The World
                    <br />
                    And
                    <br />
                    Find Next Place To Visit
                    <br />
                    <br />
                    <br />
                    <a className="wavepoint" href='/destinations'>
                        <span className='wavespan'>Choose your destination!</span>
                        <div className='wave'></div>
                    </a>
                </div>
            </div>
        )
    }
}

export default Home
