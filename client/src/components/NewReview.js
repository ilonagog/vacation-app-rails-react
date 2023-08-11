import React, { useState } from 'react'

const NewReview = ({ destinationId }) => {
    const [review, setReview] = useState("")
    const [rating, setRating] = useState("")
    const handleChange = () => {

    }
    const handleSubmit = () => {

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Test</h3>
                <label>Review</label>
                <input type="text" name="review" value={review} onChange={handleChange}></input>
                <label>Rating</label>
                <input type="text" name="rating" value={rating} onChange={handleChange}></input>
                <input type="submit" />
            </form>
        </div>
    )
}

export default NewReview
