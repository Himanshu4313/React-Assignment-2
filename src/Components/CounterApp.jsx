import { useState } from "react";
import "./counter.css";
function Counter() {
  const [count, setCount] = useState(0);
  function inc() {
    setCount(count + 1);
  }
  function dec() {
    setCount(count - 1);
  }
  return (
    <>
      <h1 className="heading">Counter App</h1>
      <div className="CounterContainer">
        <div>{count}</div>

        <div className="button">
          <button className="btn" onClick={inc}>
            Increment
          </button>
          <button className="btn" onClick={dec}>
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}
export default Counter;
