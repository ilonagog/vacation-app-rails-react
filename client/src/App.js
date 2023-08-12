import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import './index.css';
import AddDestinationForm from './components/AddDestinationForm';
import Destinations from './components/Destinations';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Login from './Login';
import Signup from './Signup';
import Contact from './components/Contact';
import DestinationDetails from './components/DestinationDetails';
import Reviews from './components/Reviews';
import UserProfile from './components/UserProfile';

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
        <Route path="/destinations" element={<Destinations destinations={destinations} setDestinations={setDestinations} addDestination={addDestination} />} />
        <Route path="/destination/:id" element={<DestinationDetails />} />
        <Route path='/destination/new' element={<AddDestinationForm addDestination={addDestination} setDestinations={setDestinations} />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="user/:id/reviews" element={<UserProfile />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>

  );
}

export default App;
