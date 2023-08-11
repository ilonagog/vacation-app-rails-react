import React, { useContext, useState } from 'react'
import { UserContext } from '../context/user'

const NewReview = ({ destinationId }) => {

    const { addReview } = useContext(UserContext)
    // const [review, setReview] = useState("")
    // const [rating, setRating] = useState("")
    const [input, setInput] = useState({
        review: "",
        rating: ""
    })
    const handleChange = (e) => {
        console.log(e.target.value)
        setInput({
            ...input,
            [e.target.review]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addReview(input)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Test</h3>
                <label>Review</label>
                <input type="text" name="review" value={input.review} onChange={handleChange}></input>
                <label>Rating</label>
                <input type="text" name="rating" value={input.rating} onChange={handleChange}></input>
                <input type="submit" />
            </form>
        </div>
    )
}

export default NewReview
