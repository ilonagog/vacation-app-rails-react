import React, { useContext, useState } from 'react'
import { UserContext } from '../context/user'
import mobiscroll from '@mobiscroll/react-lite';
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
import { Link, useParams } from 'react-router-dom';
import { Button } from '@mobiscroll/react-lite';
import { useNavigate } from 'react-router-dom';


const NewReview = ({ destinations, setDestinations }) => {
    let { id } = useParams()
    id = parseInt(id)
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()
    let destination = destinations.find((destination) => {
        return destination.id === id
    })


    // const { reviews, setReviews } = useContext(UserContext)
    // const [review, setReview] = useState("")
    // const [rating, setRating] = useState("")
    const [input, setInput] = useState({
        review: "",
        // rating: ""
    })
    const handleChange = (e) => {
        console.log(e.target.value)
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }





    const handleSubmit = (e) => {
        e.preventDefault()
        // const { id } = useParams()
        // id = parseInt(id)
        fetch(`/destinations/${id}/reviews`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                'Content-type': 'application/json'
            },
            body: JSON.stringify(input)
        })
            .then(r => r.json())
            .then(newReview => {
                setUser({
                    ...user,
                    reviews: [
                        newReview, ...user.reviews
                    ],
                    destinations: [destination, ...user.destinations]
                })
                const newDestinations = destinations.map(d => d.id === newReview.destination_id ? newReview : d)
                // const updatedDestinations = destinations.map((destination) => {
                //     if (destination.id === id) {
                //         let totalReviews = ((destination.reviews.reduce((acc, currentValue) => acc + currentValue.rating, 0)) + newReview.rating)

                //         let numberOfReviews = destination.number_reviews + 1
                //         return ({
                //             ...destination,
                //             number_reviews: numberOfReviews,
                //             reviews: [newReview, ...destination.reviews],
                //             average_rating: Math.round(totalReviews / numberOfReviews * 10) / 10
                //         })
                //     } else {
                //         return destination
                //     }
                // })
                console.log(newReview)
                setDestinations(newDestinations)
                // setReviews([...reviews, data])
                navigate(`/destinations`)
            })
        // setInput("")
        // addReview(input, id)
    }
    // setReview("")
    // setRating("")

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
                    {/* <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
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
                    </div> */}
                    <mobiscroll.Button type="submit">Submit</mobiscroll.Button>
                </div>
            </mobiscroll.Form>
        </div>
    )
}

export default NewReview
