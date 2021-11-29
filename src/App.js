import { useState } from "react";


function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = ({ target: {value} }) => setEmail(value);
  const handlePasswordChange = ({ target: {value} }) => setPassword(value);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("enviaoh")
    alert(`el menda es ${email} y su pazwoh ${password}`)
  }
  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <h2>Inisia sesionsita</h2>
        <label>
          zurcorreito?
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br/>
        <label>
          yla contraseña?
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button type="submit">
          damelotó
        </button>
      </form>
    </div>
  );
}

export default App;
