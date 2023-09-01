import React, { useState, useContext } from 'react'
import { UserContext } from '../context/user'
import mobiscroll from '@mobiscroll/react-lite';
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
import { Link, useParams } from 'react-router-dom';
import { Button } from '@mobiscroll/react-lite';
import { useNavigate } from 'react-router-dom';


const NewReview = ({ destinations, setDestinations }) => {
    const { user, setUser } = useContext(UserContext)
    let { id } = useParams()
    id = parseInt(id)
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])
    let destination = destinations.filter((destination) => {
        return destination.id === id
    })

    const [input, setInput] = useState({
        // destination_id: "",
        review: "",
        rating: ""
    })
    const handleChange = (e) => {
        console.log(e.target.value)
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        const newReview = { ...input }
        const emptyInputData = () => {
            for (const key of Object.keys(input)) {
                if (input[key].length < 1) {
                    return false
                }
            }
            return true
        }
        if (!emptyInputData()) return setErrors(["Please fill blank"])

        fetch(`/destinations/${id}/reviews`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(resp => {
                if (resp.ok) {
                    resp.json().then((newReview) => {
                        console.log(newReview)
                        const destinationFilter = destinations.find((destination) => destination.id === newReview.uniq_dest_id)
                        // if (newReview.destination_id !== newReview.uniq_dest.id) {
                        //     console.log(newReview.destination_id)

                        // in a newReview we have destination_id, same as in uniq_destination.id
                        //1- id
                        //2- go throught the array and look for the id
                        // create conditional similar as i have in delete , i have to do use .find to see wherether id was there or not , either come back as true or false, 
                        // look in the uniq_destination for the destination that has destination.id that the newReview has, if find nothing needs to be done because destination should be there already, if did not find i need to add a destination
                        if (!destinationFilter) {
                            setUser({
                                ...user, reviews: [...user.reviews, newReview],
                                destinations: [...user.uniq_dest, destination]
                            })
                            const updatedDestinations = destinations.map((d) => {
                                if (d.id === id) {
                                    return ({
                                        ...d,
                                        reviews: [...d.reviews, newReview]
                                    })
                                } else {
                                    return d
                                }

                            })

                            setDestinations(updatedDestinations)
                        }
                        navigate("/destinations")
                        // ?user.destinations.filter((destination)=>destination.id !== destination)
                    })

                } else {
                    setErrors()
                }
            })
        // })
    }

    return (
        <div>
            <Button><Link to="/destinations">Back to our destinations</Link></Button>
            <mobiscroll.Form theme="mobiscroll" onSubmit={handleSubmit}>
                <div className="mbsc-row">
                    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                        <mobiscroll.Input
                            inputStyle="box"
                            labelStyle="floating"
                            placeholder="Write your review"
                            name="review"
                            value={input.review}
                            onChange={handleChange}
                        >
                            Review:
                        </mobiscroll.Input>
                    </div>
                    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                        <mobiscroll.Input
                            inputStyle="box"
                            labelStyle="floating"
                            placeholder="Rate your trip"
                            name="rating"
                            value={input.rating}
                            onChange={handleChange}
                        >
                            Rate:
                        </mobiscroll.Input>
                    </div>
                    <mobiscroll.Button type="submit">Submit</mobiscroll.Button>

                </div>
            </mobiscroll.Form>
            {errors.length > 0 && (errors.map(error => <p key={error} style={{ color: 'red' }}>{error}</p>))}

        </div>
    )
}

export default NewReview

