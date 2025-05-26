import InputText from "./input-text/InputText"

function AutoComplete({ suggestions=[] }={}){

    return (
        <div className="autocomplete">
            <InputText />
        </div>
    )
}

export default AutoComplete