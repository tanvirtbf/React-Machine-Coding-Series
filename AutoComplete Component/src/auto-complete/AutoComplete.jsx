import Button from "./button/Button";
import InputText from "./input-text/InputText";
import Suggestions from "./suggestions/Suggestions";

import "./style.css";
import { useState } from "react";

function AutoComplete({ suggestions = [] } = {}) {
  const [query, setQuery] = useState("");
  const [showList, setShowList] = useState(false);

  function handleQueryChange(value) {
    setQuery(value);
    setShowList(true);
  }

  function handleClear() {
    setQuery("");
  }

  function handleSuggestionSelect(selectedSuggestion) {
    setQuery(selectedSuggestion);
    setShowList(false);
  }

  const filteredQuery = suggestions.filter((suggestion) => {
    return suggestion.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="autocomplete">
      <div>
        <InputText value={query} onChange={handleQueryChange} />
        <Button onClick={handleClear} label="Clear" />
      </div>
      {!!query.length && showList && (
        <Suggestions
          onSelect={handleSuggestionSelect}
          suggestions={filteredQuery}
          selectedSuggestion={query}
        />
      )}
    </div>
  );
}

export default AutoComplete;
