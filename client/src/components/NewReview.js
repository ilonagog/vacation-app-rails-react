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
                        setUser({
                            ...user, reviews: [newReview, ...user.reviews],
                            destinations: [destination, ...user.destinations]
                        })
                        const updatedDestinations = destinations.map((d) => {
                            if (d.id === id) {
                                return ({
                                    ...d,
                                    reviews: [newReview, ...d.reviews]
                                })
                            } else {
                                return d
                            }
                        })
                        setDestinations(updatedDestinations)
                        navigate("/destinations")
                    })
                } else {
                    setErrors()
                }
            })
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
                    {errors}
                </div>
            </mobiscroll.Form>
        </div>
    )
}

export default NewReview




// import React, { useState, useContext } from 'react'
// import { UserContext } from '../context/user'
// import mobiscroll from '@mobiscroll/react-lite';
// import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
// import { Link, useParams } from 'react-router-dom';
// import { Button } from '@mobiscroll/react-lite';
// import { useNavigate } from 'react-router-dom';


// const NewReview = ({ destinations, setDestinations }) => {
//     const { user, setUser, reviews } = useContext(UserContext)
//     let { id } = useParams()
//     id = parseInt(id)
//     const navigate = useNavigate()
//     const [errors, setErrors] = useState([])
//     let destination = destinations.filter((destination) => {
//         return destination.id === id
//     })

//     const [input, setInput] = useState({
//         // destination_id: "",
//         review: "",
//         rating: ""
//     })
//     const handleChange = (e) => {
//         console.log(e.target.value)
//         setInput({
//             ...input,
//             [e.target.name]: e.target.value
//         })
//     }

//     function handleSubmit(e) {
//         e.preventDefault()

//         fetch("/reviews", {
//             method: "POST",
//             headers: {
//                 "Accept": "application/json",
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify(input)
//         })
//             .then(resp => {
//                 if (resp.ok) {
//                     resp.json().then((newReview) => {
//                         console.log(newReview)

//                         const updatedUserReviews = [...user.reviews, newReview];
//                         const updatedUser = { ...user, reviews: updatedUserReviews }
//                         setUser(updatedUser)

//                         const updatedDestination = {
//                             ...destination,
//                             reviews: [...reviews, newReview]
//                         }
//                         const updatedDestinations = [...destinations, updatedDestination];
//                         console.log("updatedDestinations", updatedDestinations);
//                         setDestinations(updatedDestinations)

//                         // setUser({
//                         //     ...
//                         // })
//                         navigate("/destinations")
//                     })
//                     // addReview(newReview)


//                 } else {
//                     setErrors()
//                 }
//             })
//     }



//     return (
//         <div>
//             <Button><Link to="/destinations">Back to our destinations</Link></Button>
//             <mobiscroll.Form theme="mobiscroll" onSubmit={handleSubmit}>
//                 <div className="mbsc-row">
//                     <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
//                         <mobiscroll.Input
//                             inputStyle="box"
//                             labelStyle="floating"
//                             placeholder="Write your review"
//                             name="review"
//                             value={input.review}
//                             onChange={handleChange}
//                         >
//                             Review:
//                         </mobiscroll.Input>
//                     </div>
//                     <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
//                         <mobiscroll.Input
//                             inputStyle="box"
//                             labelStyle="floating"
//                             placeholder="Rate your trip"
//                             name="rating"
//                             value={input.rating}
//                             onChange={handleChange}
//                         >
//                             Rate:
//                         </mobiscroll.Input>
//                     </div>
//                     <mobiscroll.Button type="submit">Submit</mobiscroll.Button>
//                     {errors}
//                 </div>
//             </mobiscroll.Form>
//         </div>
//     )
// }

// export default NewReview
