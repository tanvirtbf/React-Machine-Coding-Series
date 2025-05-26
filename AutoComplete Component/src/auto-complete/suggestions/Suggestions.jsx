import Button from "../button/Button";
import "./style.css";

function Suggestions({ suggestions = [], onSelect = () => {}, selectedSuggestion='' } = {}) {
  return (
    <div className="suggestions">
      {suggestions.map((suggestion) => {
        return (
          <ListItem
            key={suggestion}
            onSelect={onSelect}
            suggestion={suggestion}
            selectedSuggestion={selectedSuggestion}
          />
        );
      })}
    </div>
  );
}

export default Suggestions;

function ListItem({ suggestion='', onSelect=()=>{}, selectedSuggestion='' }={}) {
  function handleSelect() {
    onSelect(suggestion);
  }

  return <Button data-selected={suggestion.toLowerCase()===selectedSuggestion.toLowerCase()} onClick={handleSelect} label={suggestion} />;
}
