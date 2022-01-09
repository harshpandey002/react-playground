import { useState } from "react";
import "./App.css";

function App() {
  const [rate, setRate] = useState(0);

  return (
    <div style={{ fontSize: 40 }} className="App">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          style={{ color: i <= rate ? "red" : "" }}
          onClick={() => setRate(i)}
        >
          *
        </span>
      ))}
    </div>
  );
}

export default App;
