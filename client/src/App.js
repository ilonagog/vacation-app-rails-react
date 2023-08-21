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
import Reviews from './components/Reviews';
import UserProfile from './components/UserProfile';
import NewReview from './components/NewReview';
import Footer from './components/Footer';

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

  const addDestination = (newDestination) => setDestinations([...destinations, newDestination])

  if (errors) return <h1>{errors}</h1>


  return (

    < div className="App" >
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations destinations={destinations} setDestinations={setDestinations} addDestination={addDestination} />} />
        <Route path="/destination/:id/reviews" element={<NewReview destinations={destinations} setDestinations={setDestinations} />} />
        <Route path='/destinations/new' element={<AddDestinationForm destinations={destinations} setDestinations={setDestinations} addDestination={addDestination} />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/users/destinations" element={<UserProfile destinations={destinations} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
