import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DestinationDetails = () => {
    const [destination, setDestination] = useState({})
    const [errors, setErrors] = useState(false)
    const params = useParams()

    useEffect(() => {
        fetch(`/destinations/${params.id}`)
            .then(resp => {
                if (resp.ok) {
                    console.log('okay')
                    resp.json().then(data => {
                        console.log(data)
                        setDestination(data)
                    })
                } else {
                    console.log("error")
                    resp.json().then(data => setErrors(data.error))
                }
            })
    }, [])

    const handleReview = () => {
        fetch(`/reviews`, {
            method: "POST",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({})
        })
    }
    return (
        <div>

        </div>
    )
}

export default DestinationDetails