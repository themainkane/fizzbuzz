import { useEffect, useState } from "react";

export default function FizzBuzz({ numbersArray }) {
  const [array, setArray] = useState([]);

  useEffect(() => {
    console.log(numbersArray);
    setArray(numbersArray);
  }, []);

  return (
    <>
      {!array.length
        ? null
        : array.map((number, index) =>
            number % 5 === 0 && number % 3 === 0 ? (
              <div key={index}>Fizzbuzz</div>
            ) : number % 3 === 0 ? (
              <div key={index}>Fizz</div>
            ) : number % 5 === 0 ? (
              <div key={index}>Buzz</div>
            ) : (
              <div key={index}>{number}</div>
            )
          )}
    </>
  );
}
