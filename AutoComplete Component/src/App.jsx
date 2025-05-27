import { useEffect, useState } from 'react'
import './App.css'
import AutoComplete from './auto-complete'

const Suggestions = ["Apple", "Banana", "Orange", "Kiwi", "Grapes"]

function App() {
  const [suggestions, setSuggestions] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() =>{
    setIsLoading(true)
    new Promise(function(resolve, reject){
      setTimeout(() => {
        resolve(Suggestions)
      }, 2000)
    }).then((data) => {
      setIsLoading(false)
      setSuggestions(data)
    })
  }, [])

  function onChange(value){
    console.log("Value: ", value);
  }

  return (
    <>
      <AutoComplete debounceInput={true} isLoading={isLoading} suggestions={suggestions} onChange={onChange} />
    </>
  )
}

export default App
