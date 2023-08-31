import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="social-icons">
                <p>Get to know us!</p>
                <a className="social-icon twitter" href="https://www.youtube.com/watch?v=0AmITped1KY">
                    <i className="fab fa-twitter"></i>
                </a>
                <a className="social-icon dribbble" href="https://www.youtube.com/watch?v=0AmITped1KY">
                    <i className="fab fa-dribbble"></i>
                </a>
                <a className="social-icon facebook" href="https://www.youtube.com/watch?v=0AmITped1KY">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a className="social-icon instagram" href="https://www.youtube.com/watch?v=0AmITped1KY">
                    <i className="fab fa-instagram"></i>
                </a>
                <a className="social-icon github" href="https://www.youtube.com/watch?v=0AmITped1KY">
                    <i className="fab fa-github"></i>
                </a>
            </div>
            <div className="footer-menu">
                <ul className="f-menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/destinations">Destinations</a></li>
                    <li><a href="/about">About Us</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
