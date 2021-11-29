import { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState("username");
  const [password, setPassword] = useState("password");
  const [isLogged, setIsLogged] = useState(false);

  const handleLoginClick = () => {
    setIsLogged(true);
  }

  const handleClearButtonClick = () => {
    setIsLogged(false);
  }
  /** componentDidUpdate */
  useEffect(() => {
    console.log('yo, this is a didUpdate ifect')
  })

  /** ComponentDidMount */
  useEffect(() => {
    console.log('broooh, component didmaunt')
    return () => {
      console.log('guil ummoun')
    }
  }, [])

  useEffect(() =>{
    console.log('che, algo, user cambió')
  }, [user, password])

  return (
    <div>
      <input type="text" value={user} onChange={({ target: { value }}) => setUser(value) } />
      <br/>
      <input type="password" value={password} onChange={({ target: { password }}) => setPassword(password) } />
      <br />
      <button onClick={handleLoginClick} >
        Saing in
      </button>
      <button onClick={handleClearButtonClick}>
        cliar
      </button>
      {isLogged && <h2> zazefuli loged</h2>}
    </div>
  )
}
export default App;