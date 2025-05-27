import { useCallback, useState } from "react";
import Button from "./button/Button";
import InputText from "./input-text/InputText";
import Suggestions from "./suggestions/Suggestions";
import "./style.css";

function debounce(callback, delay){
  let timeoutId=''

  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() =>{
      callback(...args)
    }, delay);
  }
}

function AutoComplete({ debounceInput=false, isLoading=false, suggestions = [], onChange=()=>{} } = {}) {
  const [query, setQuery] = useState("");
  const [showList, setShowList] = useState(false);

  const debouncedFunction = useCallback(debounce(onChange, 2000), [])

  function handleQueryChange(value) {
    setQuery(value);
    setShowList(true);
    manageDebouncing(value)
  }

  function manageDebouncing(value) {
    if(debounceInput){
      debouncedFunction(value);
    }else{
      onChange(value);
    }
  }

  function handleClear() {
    setQuery("");
  }

  function handleSuggestionSelect(selectedSuggestion) {
    setQuery(selectedSuggestion);
    setShowList(false);
    manageDebouncing(selectedSuggestion)
  }

  const filteredQuery = suggestions.filter((suggestion) => {
    return suggestion.toLowerCase().includes(query.toLowerCase());
  });

  let showSuggestionsWithLoader = !!query.length && showList;
  if (isLoading && query.length) {
    showSuggestionsWithLoader = true;
  }

  return (
    <div className="autocomplete">
      <div>
        <InputText value={query} onChange={handleQueryChange} />
        <Button onClick={handleClear} label="Clear" />
      </div>
      {showSuggestionsWithLoader && (
        <Suggestions
          isLoading={isLoading}
          onSelect={handleSuggestionSelect}
          suggestions={filteredQuery}
          selectedSuggestion={query}
        />
      )}
    </div>
  );
}

export default AutoComplete;
