import React, { useState } from "react";
export const Count = () => {
  let [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount(count + 1);
  };
  const decrementHandler = () => {
    setCount(count - 1);
  };
  const resetHandler = () => {
    setCount(0);
  };

  const signHandler = () => {
    setCount(-count);
  };
  return (
    <>
      <h2>
        Count :<span data-testid="count">{count}</span>
      </h2>

      <button onClick={incrementHandler}>+</button>

      <button onClick={decrementHandler}>-</button>

      <button onClick={resetHandler}>Reset</button>

      <button onClick={signHandler}>-/+</button>
    </>
  );
};
