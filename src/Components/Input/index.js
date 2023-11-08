
function Input(props) {
    return (
        <input 
            placeholder={props.placeholder}
            id={props.id}
            name={props.name}
            type={props.type}
            value={props.value}
            disabled={props.disabled}
            required={props.required}
        />
    )
} 

export default Input