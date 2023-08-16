import { Button } from '@mobiscroll/react-lite'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import mobiscroll from '@mobiscroll/react-lite';
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";

const AddDestinationForm = ({ addDestination, setViewForm, setDestinations }) => {
  const [input, setInput] = useState({
    name: "",
    location: "",
    image: "",
    description: "",
    price: ""
  })
  // const { name, location, image, description, price } = input
  const navigate = useNavigate()

  // const [errors, setErrors] = useState([])

  const handleChange = (e) => {
    // console.log(e.target.value)
    // const { name, value } = e.target
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
  console.log(input)
  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('/destinations', {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(input)
    })
      .then(res => res.json())
      .then(newDestination => {
        console.log(newDestination)
        addDestination(newDestination)
        // setDestinations(newDestination)
        navigate("/destinations")
      })
  }


  //     .then(res =>
  //       res.json())
  //     .then((newDestination) => {
  //       setDestinations([
  //         ...destinations, newDestination
  //       ])
  //       navigate("/destinations")
  //     })
  // }


  return (
    <div className='form-add'>
      <Button><Link to="/destinations">Back to our destinations</Link></Button>
      <h3>Add new property!</h3>
      <mobiscroll.Form theme="mobiscroll" onSubmit={handleSubmit}>
        <div className="mbsc-row">
          <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
            <mobiscroll.Input
              inputStyle="box"
              labelStyle="floating"
              placeholder="Enter property name"
              name="name"
              value={input.name}
              onChange={handleChange}
            >
              Name:
            </mobiscroll.Input>
          </div>
          <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
            <mobiscroll.Input
              inputStyle="box"
              labelStyle="floating"
              placeholder="Enter property location"
              name="location"
              value={input.location}
              onChange={handleChange}
            >
              Location:
            </mobiscroll.Input>
          </div>
          <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
            <mobiscroll.Input
              inputStyle="box"
              labelStyle="floating"
              placeholder="Enter property image"
              name="image"
              value={input.image}
              onChange={handleChange}
            >
              Image:
            </mobiscroll.Input>
          </div>
          <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
            <mobiscroll.Input
              inputStyle="box"
              labelStyle="floating"
              placeholder="Enter property description"
              name="description"
              value={input.description}
              onChange={handleChange}

            >
              Description:
            </mobiscroll.Input>
          </div>
          <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
            <mobiscroll.Input
              inputStyle="box"
              labelStyle="floating"
              type="price"
              placeholder="Set the price"
              name="price"
              value={input.price}
              onChange={handleChange}
            >
              Price:
            </mobiscroll.Input>
          </div>
          <mobiscroll.Button type="submit">Submit</mobiscroll.Button>
        </div>
      </mobiscroll.Form>

    </div>
  )
}

export default AddDestinationForm
