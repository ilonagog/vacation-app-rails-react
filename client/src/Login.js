import { useState, useContext } from 'react'
import { UserContext } from './context/user'
import mobiscroll from '@mobiscroll/react-lite';
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
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
            body: JSON.stringify(formData)
        })
            .then((r) => {
                if (r.ok) {
                    r.json().then((userInfo) => login(userInfo))
                    navigate("/")
                } else {
                    r.json().then((err) => {
                        if (err.errors) {
                            setErrors(Object.values(err.errors));
                        } else {
                            setErrors([err.error]);
                        }
                    });
                }
            })
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
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
                                value={formData.username}
                                name="username"
                                onChange={handleChange}
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
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            >
                                Password
                            </mobiscroll.Input>
                        </div>
                        <mobiscroll.Button type="submit">LogIn</mobiscroll.Button>
                    </div>
                </mobiscroll.Form>
            </div>
            {errors.map((err) => (
                <li style={{ color: "black" }} key={err}>
                    {err}
                </li>
            ))}
        </>
    );
}

export default Login
