import Button from "./button/Button"
import InputText from "./input-text/InputText"
import Suggestions from "./suggestions/Suggestions"

function AutoComplete({ suggestions=[] }={}){

    return (
        <div className="autocomplete">
            <InputText />
            <Button label="Clear" />
            <Suggestions suggestions={suggestions} />
        </div>
    )
}

export default AutoComplete