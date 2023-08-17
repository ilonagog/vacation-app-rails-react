import React, { useContext, useState } from 'react'
import { UserContext } from '../context/user'
import { Button } from '@mobiscroll/react-lite'
import mobiscroll from '@mobiscroll/react-lite';
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
import { Link, useParams } from 'react-router-dom';


const EditReview = ({ reviews, destination }) => {
    const [viewForm, setViewForm] = useState(false)
    const { handleEdit } = useContext(UserContext)
    // const { reviewId } = useParams()


    const [review, setReview] = useState(review.review)
    const [rating, setRating] = useState(review.rating)
    // const [input, setInput] = useState({
    //     review: "",
    //     rating: ""
    // })
    // const handleChange = (e) => {
    //     console.log(e.target.value)
    //     setInput({
    //         ...input,
    //         [e.target.name]: e.target.value
    //     })
    // }


    const handleSubmit = (e) => {
        console.log("clicked")
        e.preventDefault()
        const editedReviewArray = {
            ...review,
            destination_is: destination.id,
            review: review,
            rating: rating
        }
        handleEdit(editedReviewArray)
        // handleEdit(input, reviewId)
        // setInput("")
        setViewForm()

    }
    const handleEditView = () => {
        setViewForm(true)
    }

    return (
        <div>
            {viewForm ?
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
                                    value={review}
                                    onChange={(e) => setReview(e.target.value)}
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
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value)}
                                >
                                    Rate:
                                </mobiscroll.Input>
                            </div>
                            <mobiscroll.Button type="submit" onClick={() => handleEdit(review.id)}>Edit review</mobiscroll.Button>
                        </div>
                    </mobiscroll.Form>
                </div>
                :
                <Button onClick={handleEditView}>Edit Review</Button>
            }
        </div>
    )
}

export default EditReview
