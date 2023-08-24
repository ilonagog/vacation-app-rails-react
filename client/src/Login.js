import { useState, useContext } from 'react'
import { UserContext } from './context/user'
import mobiscroll from '@mobiscroll/react-lite';
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
import { useNavigate } from 'react-router-dom';



function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const { login } = useContext(UserContext)
    const navigate = useNavigate()

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
        })
            .then((r) => {
                if (r.ok) {
                    r.json().then((userInfo) => login(userInfo))
                    navigate("/")
                } else {
                    const errorList = errors.map((error) => (error = { error }
                    ))
                    setErrors(errorList)
                }
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
                                placeholder="Enter your password"
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
                <li>{errors}</li>
            </ul>
        </>
    );
}

export default Login
