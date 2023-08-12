import { useState, useContext } from 'react'
import { UserContext } from './context/user'
import mobiscroll from '@mobiscroll/react-lite';
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
import Signup from './Signup';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    // const { setUser } = useContext(UserContext)
    const { login } = useContext(UserContext)

    function handleSubmit(e) {
        e.preventDefault()

        fetch("/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(res => res.json())
            .then((user) => {
                if (!user.error) {
                    login(user)
                    setUsername("")
                    setPassword("")
                } else {
                    const errors = Object.entries(user.error)
                    errors.map(messages => setErrors(messages.join(", "))
                    )
                    // if (r.ok) {
                    //     r.json().then((user) => setUser(user))
                    // } else {
                    //     r.json().then((err) => setError(err.error))
                    // }
                }
                setUsername("")
                setPassword("")
            })
    }

    return (
        <>
            <div className='form'>

                <mobiscroll.Form theme="mobiscroll" onSubmit={handleSubmit} className='form'>
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
                        <mobiscroll.Button type="submit">LogIn</mobiscroll.Button>
                    </div>
                </mobiscroll.Form>
            </div>
            <ul>
                <h3>{errors}</h3>
            </ul>
        </>
    );
}

export default Login

// import React, { useState, useContext } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { UserContext } from './context/user'

// const Login = () => {
//     const [username, setUsername] = useState("")
//     const [password, setPassword] = useState("")
//     const [errors, setErrors] = useState([])
//     const { login } = useContext(UserContext)
//     const navigate = useNavigate()

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         fetch('/login', {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//                 username: username,
//                 password: password
//             })
//         })
//             .then(r => {
//                 if (r.ok) {
//                     setErrors([]);
//                     r.json()

//                         .then((user) => {
//                             login(user)
//                             setUsername(user);
//                             navigate("/")
//                         });
//                 } else {
//                     r.json()
//                         .then((err) => setErrors(err.error))
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
//                 <input type='submit' value='Log in!' />
//             </form>
//             {errors ? <div>{errors}</div> : null}
//         </>

//     )
// }


// export default Login
