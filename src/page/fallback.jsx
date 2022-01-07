import { useState, useMemo } from "react";

export default function Fallback() {
  const [count, setCount] = useState(0);

  const num = useMemo(() => {
    return slowFunction(count);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={handleDecrement}>Minus</button>
      <p>{count}</p>
      <button onClick={handleIncrement}>Plus</button>
    </div>
  );
}

function slowFunction(n) {
  console.log("calling slow function");
  for (let i = 0; i <= 1000000000; i++) {}
  return n * 2;
}
