import { useEffect } from 'react'
import './App.css'
import AutoComplete from './auto-complete'

const Suggestions = ["Apple", "Banana", "Orange", "Kiwi", "Grapes"]

function App() {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() =>{
    new Promise(function(resolve, reject){
      setTimeout(() => {
        resolve(Suggestions)
      }, 5000)
    }).then((data) => {
      setSuggestions(data)
    })
  }, [])

  function onChange(value){
    console.log("Value: ", value);
  }

  return (
    <>
      <AutoComplete suggestions={suggestions} onChange={onChange} />
    </>
  )
}

export default App
