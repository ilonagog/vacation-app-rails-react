import { useEffect, useState } from 'react';
import './App.css';

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
      <header className="App-header">

      </header>
    </div >
  );
}

export default App;
