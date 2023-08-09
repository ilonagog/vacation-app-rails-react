import { useState, useContext } from 'react'
import { UserContext } from './context/user'
import mobiscroll from '@mobiscroll/react-lite';
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const { signup } = useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("hi")
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then(resp => resp.json())
            .then(user => {
                if (!user.errors) {
                    console.log(user)
                    signup(user)
                    navigate('/')
                } else {
                    setUsername("")
                    setPassword("")
                    const errorLis = user.errors.map(e => <li>{e}</li>)
                    setErrors(errorLis)
                }
            })

    }


    return (
        <>
            <mobiscroll.Form theme="mobiscroll" onSubmit={handleSubmit}>
                <div className="mbsc-row">
                    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                        <mobiscroll.Input
                            inputStyle="box"
                            labelStyle="floating"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        >
                            Username
                        </mobiscroll.Input>
                    </div>
                    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                        <mobiscroll.Input
                            inputStyle="box"
                            labelStyle="floating"
                            type="password"
                            passwordToggle="true"
                            placeholder="Set a password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        >
                            Password
                        </mobiscroll.Input>
                    </div>
                </div>
                <mobiscroll.Button type="submit">Sign In</mobiscroll.Button>
            </mobiscroll.Form>
            <ul>{errors}</ul>
        </>
    );
}

export default Signup

// import React, { useState, useContext } from 'react';
// import { UserContext } from './context/user';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//     const [username, setUsername] = useState("")
//     const [password, setPassword] = useState("")
//     const [errors, setErrors] = useState([])
//     const { signup } = useContext(UserContext)
//     const navigate = useNavigate()

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         fetch('/signup', {
//             method: 'POST',
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//                 username: username,
//                 password: password,
//             })
//         })
//             .then(resp => resp.json())
//             .then(user => {
//                 if (!user.errors) {
//                     signup(user)
//                     navigate('/')
//                 } else {
//                     setUsername("")
//                     setPassword("")
//                     const errorLis = user.errors.map(e => <li>{e}</li>)
//                     setErrors(errorLis)
//                 }
//             })

//     }

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <label>Username</label>
//                 <input type="text" name='username' value={username} onChange={(e) => setUsername(e.target.value)} />
//                 <label>Password</label>
//                 <input type="text" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
//                 <input type='submit' value='Sign up!' />
//             </form>
//             {errors ? errors.map(error => <div> {error[0]} {error[1]} </div>) : null}
//         </>
//     )
// }

// export default Signup

