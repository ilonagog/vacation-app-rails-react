import React, { useContext, useState } from 'react'
import { UserContext } from '../context/user'
import { Button } from '@mobiscroll/react-lite'
import mobiscroll from '@mobiscroll/react-lite';
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
import { Link, useParams } from 'react-router-dom';


const EditReview = () => {
    const { handleEdit } = useContext(UserContext)
    const { reviewId } = useParams()
    const [input, setInput] = useState({
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


    const handleSubmit = (e) => {
        e.preventDefault()
        handleEdit(input, reviewId)
        setInput("")

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
        </div>
    )
}

export default EditReview
