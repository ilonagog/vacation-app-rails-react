import React, { useState } from 'react'

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
    setDestinations()
  }
  return (
    <div>
      {errors ? errors.map(e => <div>{e[0]} {e[1]}</div>) : null}
      <form onSubmit={handleSubmit}>
        <h3>Test</h3>
        <label>name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange}></input>
        <label>location</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange}></input>
        <label>image</label>
        <input type="text" name="image" value={formData.image} onChange={handleChange}></input>
        <label>description</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange}></input>
        <label>price</label>
        <input type="text" name="price" value={formData.price} onChange={handleChange}></input>
        <input type="submit" />
      </form>

    </div>
  )
}

export default AddDestinationForm
