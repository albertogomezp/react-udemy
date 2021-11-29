import { useEffect, useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
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
    console.log('che, algo, name cambió')
  }, [name, age])

  return (
    <div>
      <input value={name} onChange={({ target: { value }}) => setName(value) } />
      <br/>
      <input age={age} onChange={({ target: { age }}) => setAge(age) } />
    </div>
  )
}
export default App;