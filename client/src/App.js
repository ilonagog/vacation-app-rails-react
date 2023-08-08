import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Destinations from './components/Destinations';
import Home from './components/Home';
import Navigation from './components/Navigation';

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

  if (errors) return <h1>{errors}</h1>
  return (

    < div className="App" >
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations destinations={destinations} setDestinations={setDestinations} />} />


      </Routes>
    </div>

  );
}

export default App;
