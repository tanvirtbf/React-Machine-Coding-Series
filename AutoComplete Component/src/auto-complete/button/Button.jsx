import './style.css'

function Button({ label="", onClick=()=>{} }={}){

    return (
        <button onClick={onClick}>{label}</button>
    )
}

export default Button