import { useMemo, useState } from "react";
import User from "../component/User";

export default function Memo() {
  const [dark, setDark] = useState(false);

  const users = useMemo(() => {
    return [
      { name: "Harsh", age: 22 },
      { name: "Yash", age: 24 },
      { name: "Tuffy", age: 12 },
    ];
  }, []);

  console.log("Parent Component");

  return (
    <div
      className="center"
      style={{ backgroundColor: dark ? "lightblue" : "" }}
    >
      <h1>Parent Component</h1>
      <button onClick={() => setDark(!dark)}>Theme</button>
      {users.map((data) => (
        <User data={data} />
      ))}
    </div>
  );
}
