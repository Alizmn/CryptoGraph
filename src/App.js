import {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import SparkGraph from "./components/SparkGraph"

const convertedKey = process.env.REACT_APP_NOMIC_KEY;
function App() {
  const [state, setState] = useState([])
  useEffect(() => {
    axios
      .get(`https://api.nomics.com/v1/currencies/ticker?key=${convertedKey}&ids=BTC&convert=CAD`)
      .then(res => setState(res.data))
      .then(() => console.log(state))
  }, []);

  return (
    <div className="App">
      <h1>hello</h1>
      {state.length !== 0 && <h2>Bitcoin price at {state[0].price_timestamp} is {state[0].price} CAD</h2>}
      <SparkGraph/>
    </div>
  );
}

export default App;
