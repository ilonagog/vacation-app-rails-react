
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
        console.log(e.target.value)

        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const emptyInputData = () => {
            for (const key of Object.keys(input)) {
                if (input[key].length < 1) {
                    return false
                }
            }
            return true
        }
        console.log("clicked")
        if (!emptyInputData()) return setErrors(["Please fill blank"])

        fetch(`/reviews/${review.id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(input),
        })
            .then(r => r.json())
            .then((data) =>
                onEditReview(data))
        setViewForm()
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
                </div>
                :
                <Button onClick={handleEditView}>Edit Review</Button>
            }
            {errors.length > 0 ? errors.map(error => <p key={error} style={{ color: 'red' }}>{error}</p>) : null}

        </div>
    )
}

export default EditReview


