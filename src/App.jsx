import { useEffect, useState } from "react";

import "./App.css";
import FizzBuzz from "./FizzBuzz";

function App() {
  const [numbersArray, setNumbersArray] = useState([]);

  const createNumbers = () => {
    const numbers = [];
    for (let n = 1; n <= 100; n++) {
      numbers.push(n);
    }
    setNumbersArray(numbers);
  };

  useEffect(() => {
    createNumbers();
  }, []);

  return (
    <>
      <FizzBuzz numbersArray={numbersArray} />
    </>
  );
}

export default App;
