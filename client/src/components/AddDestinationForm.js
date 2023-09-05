import { Button } from '@mobiscroll/react-lite'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import mobiscroll from '@mobiscroll/react-lite';
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";


const AddDestinationForm = ({ addDestination }) => {
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()
  const [input, setInput] = useState({
    name: "",
    location: "",
    image: "",
    description: "",
    price: ""
  })
  const handleChange = (e) => {
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
      .then(res => {
        if (res.ok) {
          res.json().then((newDestination) => {
            console.log(newDestination)
            addDestination(newDestination)
            navigate("/destinations")
          })
        } else {
          res.json().then((err) => {
            if (err.errors) {
              setErrors(Object.values(err.errors));
            } else {
              setErrors([err.error]);
            }
          });

        }
      })
  }

  return (
    <>
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
        {errors.map((err) => (
          /* Display any errors returned by the server */
          <li style={{ color: "black" }} key={err}>
            {err}
          </li>
        ))}
      </div>
    </>
  )
}

export default AddDestinationForm
