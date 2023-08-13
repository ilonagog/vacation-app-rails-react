import { Button } from '@mobiscroll/react-lite'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import mobiscroll from '@mobiscroll/react-lite';
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";

const AddDestinationForm = ({ addDestination, setViewForm, setDestinations }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    image: "",
    description: "",
    price: ""
  })
  const [errors, setErrors] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('/destinations', {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ ...formData })
    })
      .then(res => {
        if (res.ok) {
          setErrors([]);
          res.json().then((newDestination) => addDestination(newDestination));
        } else {
          //should display errors but dont 
          res.json().then((err) =>
            setErrors(err.errors))
        }
      })
    setFormData(formData)
    setViewForm(false)
    setDestinations(formData)
  }
  return (
    <div className='form-add'>
      {errors ? errors.map(e => <div>{e[0]} {e[1]}</div>) : null}
      <Button><Link to="/destinations">Back to our destinations</Link></Button>
      <h3>Add new property!</h3>
      <mobiscroll.Form theme="mobiscroll" onSubmit={handleSubmit}>
        <div className="mbsc-row">
          <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
            <mobiscroll.Input
              inputStyle="box"
              labelStyle="floating"
              placeholder="Enter property name"
              value={formData.name}
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
              value={formData.location}
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
              value={formData.image}
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
              value={formData.description}
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
              value={formData.price}
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
