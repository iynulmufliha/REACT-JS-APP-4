import React, { useState } from 'react';
function ComputeNumbers() {
  const [x, setX] = useState('');
  const [fact, setFact] = useState('');
  const factorial = (n) => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);};
  const handleCompute = () => {
    setFact(factorial(Number(x)));};
  return (
    <div><input type="number" value={x}onChange={(e) => setX(e.target.value)}  placeholder="Enter a number"/>
      <button onClick={handleCompute}>Find Factorial</button>
      <p>{fact}</p></div>);}
export default ComputeNumbers;

