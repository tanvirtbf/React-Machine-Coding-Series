import Button from '../button/Button'
import './style.css'

function Suggestions({ suggestions=[] }={}){

    return (
        <div className='suggestions'>
            {suggestions.map(suggestion => {
                return <ListItem key={suggestion} suggestion={suggestion} />
            }) }
        </div>
    )
}

export default Suggestions

function ListItem({ suggestion }){
    return (
        <Button label={suggestion} />
    )
}
