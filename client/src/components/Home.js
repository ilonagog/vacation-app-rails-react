import React, { useContext } from 'react'
import { UserContext } from '../context/user'


const Home = () => {
    const { user, loggedin } = useContext(UserContext)
    if (loggedin) {
        return (<hi>Welcome {user.username}</hi>)


        // if (!user || user.error) {
        //     return (<h3>Please Login</h3>)
    } else {

        return (
            <div className='home'>
                <img width="100%" height="60%" src="https://hips.hearstapps.com/hmg-prod/images/nature-quotes-landscape-1648265299.jpg" alt="vacation" />
                <div className='centered'>
                    Explore The World
                </div>
            </div>
        )
    }

}

export default Home
