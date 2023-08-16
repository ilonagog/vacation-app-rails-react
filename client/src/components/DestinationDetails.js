// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// // import { UserContext } from '../context/user'
// // import NewReview from './NewReview'

// const DestinationDetails = ({reviews}) => {
//     // const [destination, setDestination] = useState([])
//     const [errors, setErrors] = useState(false)
//     const {id} = useParams()
//     id = parseInt
//     // const { reviews } = useContext(UserContext)

//     useEffect(() => {
//         fetch(`/destinations/${params.id}`)
//             .then(resp => {
//                 if (resp.ok) {
//                     console.log('okay')
//                     resp.json().then(data => {
//                         console.log(data)
//                         setDestination(data)
//                     })
//                 } else {
//                     console.log("error")
//                     resp.json().then(data => setErrors(data.error))
//                 }
//             })
//     }, [params.id])
//     // }, [])


//     // const handleReview = () => {
//     //     fetch("/reviews", {
//     //         method: "POST",
//     //         headers: { 'Content-type': 'application/json' },
//     //         body: JSON.stringify({})
//     //     })
//     // }
//     return (
//         <div>
//             <h1>{destination.name}</h1>
//             {/* <ul>
//                 {reviews}
//             </ul> */}
//             <ul>{errors}</ul>


//         </div>
//     )
// }

// export default DestinationDetails
