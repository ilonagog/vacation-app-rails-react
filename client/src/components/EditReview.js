import React, { useContext, useState } from 'react'
import { UserContext } from '../context/user'
import { Button } from '@mobiscroll/react-lite'
import mobiscroll from '@mobiscroll/react-lite';
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
import { Link } from 'react-router-dom';


const EditReview = ({ review }) => {
    const [viewForm, setViewForm] = useState(false)
    const { handleEdit } = useContext(UserContext)
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
        console.log("clicked")
        e.preventDefault()


        handleEdit(review.id, input)
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


