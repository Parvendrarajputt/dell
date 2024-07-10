import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [recievedData, setRecievedData] = useState(null);
  let url = "https://cat-fact.herokuapp.com/facts";

  const getFacts = async (api) => {
    try {
      const response = await fetch(api);
      const data = await response.json();
      console.log("The received data is ", data);
      setRecievedData(data);
    } catch (e) {
      console.log("error occurred " + e);
    }
  };

  useEffect(() => {
    getFacts(url);
  }, []);

  const getRandomFact = () => {
      const randomIndex = Math.floor(Math.random() * recievedData.length);
      return recievedData[randomIndex].text; 
    
  };

  return (
    <div className="App">
      <p>Api data fetching </p>
      <br />
      {recievedData && (
        <div className="fact">
          <p>{getRandomFact()}</p>
        </div>
      )}
    </div>
  );
}

export default App;
