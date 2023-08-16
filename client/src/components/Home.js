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
                <img width="100%" height="20%" src="https://images.unsplash.com/photo-1633511090690-0b7f2fec0e8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="vacation" />
                {/* <img width="100%" height="60%" src="https://hips.hearstapps.com/hmg-prod/images/nature-quotes-landscape-1648265299.jpg" alt="vacation" /> */}
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
                    {/* <div className='home-vac'>
                        <a class="btn btn-large btn-info">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/0AmITped1KY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </a>
                    </div> */}
                </div>
            </div>
        )
    }

}

export default Home
