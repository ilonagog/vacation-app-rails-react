import React from 'react'

const AddDestinationForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Test</h3>
        <label>name</label>
        <input type="text" name="name"></input>
        <label>location</label>
        <input type="text" name="location"></input>
        <label>image</label>
        <input type="text" name="image"></input>
        <label>description</label>
        <input type="text" name="description"></input>
        <label>price</label>
        <input type="text" name="price"></input>
        <input type="submit" />
      </form>
    </div>
  )
}

export default AddDestinationForm
