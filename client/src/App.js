import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [destinations, setDestinations] = useState([])

  useEffect(() => {
    fetch('/destinations')
      .then((resp) => resp.json())
      .then(data => {
        console.log(data)
        setDestinations(data)
      })
  }, [])
  return (
    < div className="App" >
      <header className="App-header">

      </header>
    </div >
  );
}

export default App;
