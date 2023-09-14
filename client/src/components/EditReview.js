
import React, { useState } from 'react'
import { Button } from '@mobiscroll/react-lite'
import mobiscroll from '@mobiscroll/react-lite';
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";


const EditReview = ({ review, onEditReview }) => {
    const [viewForm, setViewForm] = useState(false)
    const [errors, setErrors] = useState([])
    const [input, setInput] = useState({
        review: review.review,
        rating: review.rating
    })
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`/reviews/${review.id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(input),
        })
            .then(resp => {
                if (resp.ok) {
                    resp.json().then((data) =>

                        onEditReview(data))
                    setViewForm(false)
                } else {
                    resp.json().then((err) => setErrors(err.errors))
                }
            })


    }
    const handleEditView = () => {
        setViewForm(true)
    }

    return (
        <div>
            {viewForm ?
                <div>
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
                            <mobiscroll.Button type="submit">Edit review</mobiscroll.Button>
                        </div>
                    </mobiscroll.Form>
                    {errors.map((err) => (
                        <li style={{ color: "black" }} key={err}>
                            {err}
                        </li>
                    ))}
                </div>
                :
                <Button onClick={handleEditView}>Edit Review</Button>
            }
        </div>
    )
}

export default EditReview


