import Button from "./button/Button";
import InputText from "./input-text/InputText";
import Suggestions from "./suggestions/Suggestions";

import './style.css'

function AutoComplete({ suggestions = [] } = {}) {
  return (
    <div className="autocomplete">
      <div>
        <InputText />
        <Button label="Clear" />
      </div>
      <Suggestions suggestions={suggestions} />
    </div>
  );
}

export default AutoComplete;
