import './App.css'
import AutoComplete from './auto-complete'

const Suggestions = ["Apple", "Banana", "Orange", "Kiwi", "Grapes"]

function App() {


  return (
    <>
      <AutoComplete suggestions={Suggestions} />
    </>
  )
}

export default App
