import Button from "./button/Button";
import InputText from "./input-text/InputText";
import Suggestions from "./suggestions/Suggestions";

import './style.css'
import { useState } from "react";

function AutoComplete({ suggestions = [] } = {}) {
    const [query, setQuery] = useState('')

    function handleQueryChange(value){
        setQuery(value)
    }

    function handleClear(){
        setQuery('')
    }

    const filteredQuery = suggestions.filter(suggestion => {
        return suggestion.toLowerCase().includes(query.toLowerCase())
    })

  return (
    <div className="autocomplete">
      <div>
        <InputText value={query} onChange={handleQueryChange} />
        <Button onClick={handleClear} label="Clear" />
      </div>
      {!!query.length && <Suggestions suggestions={filteredQuery} />}
    </div>
  );
}

export default AutoComplete;
