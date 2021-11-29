import { useEffect, useState } from "react/cjs/react.development";

const jsonData = [
{ key: "1",  name: "Johan Paul Montoya"},
{ key: "2",  name: "Alam Brito Delgado"},
{ key: "3",  name: "Chiquito of the Road"},
{ key: "4",  name: "Alberto Gomez"},
{ key: "5",  name: "Worki Jimenez"},
{ key: "6",  name: "Manolo of the Drum"}]

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 4000)
  }, [])

  const renderData =  () => {     
    return jsonData?.map((value) => (
      <div key={value.key}>
        <p>{value.name}</p>
      </div>
    ));
  };

  return (
    <div>
      { isLoading ? <h2>lodin</h2> :  renderData() }      
    </div>
  )
}
export default App;