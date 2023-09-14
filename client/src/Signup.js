import { useState, useContext } from 'react'
import { UserContext } from './context/user'
import { useNavigate } from 'react-router-dom';
import mobiscroll from '@mobiscroll/react-lite';
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";

const Signup = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
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
            body: JSON.stringify(formData)
        })
            .then(resp => resp.json())
            .then(user => {
                if (!user.errors) {
                    signup(user)
                    navigate('/')
                } else {
                    const errorList = user.errors.map((e, i) => <li key={i}>{e}</li>)
                    setErrors(errorList)
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
            <mobiscroll.Form theme="mobiscroll" onSubmit={handleSubmit}>
                <div className="mbsc-row">
                    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                        <mobiscroll.Input
                            inputStyle="box"
                            labelStyle="floating"
                            placeholder="Enter your username"
                            name="username"
                            value={formData.username}
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
                            passwordToggle={formData.password === true}
                            placeholder="Set a password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        >
                            Password
                        </mobiscroll.Input>
                    </div>
                    <mobiscroll.Button type="submit">Sign In</mobiscroll.Button>
                </div>
            </mobiscroll.Form>
            <ul>
                {errors}
            </ul>
        </>
    );
}

export default Signup

