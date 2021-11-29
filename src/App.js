import { useState } from "react";


function App() {
  const [name, setName] = useState("Alberto");
  const [age] = useState("21");
  const [, setSomething] = useState("Hey!");

  const handleHeyclick = () => {
    setName("Manolo")
  }
  return (
    <div className="App">
        <h2>Hello hello, {name}</h2>
        <p>ur age is {age} lol</p>
        <button onClick={handleHeyclick}>
          Hey!
        </button>
    </div>
  );
}

export default App;
