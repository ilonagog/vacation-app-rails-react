import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddDestinationForm from './components/AddDestinationForm';
import Destinations from './components/Destinations';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Login from './Login';
import Signup from './Signup';

function App() {
  const [destinations, setDestinations] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    fetch('/destinations')
      .then((resp) => {
        if (resp.ok) {
          resp.json().then(setDestinations)
        } else {
          resp.json().then(data => setErrors(data.error))
        }
      })
  }, [])

  const addDestination = (destination) => setDestinations(current => [...current, destination])

  if (errors) return <h1>{errors}</h1>
  return (

    < div className="App" >
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations destinations={destinations} setDestinations={setDestinations} />} />
        <Route path='/productions/new' element={<AddDestinationForm addDestination={addDestination} setDestinations={setDestinations} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>

  );
}

export default App;
