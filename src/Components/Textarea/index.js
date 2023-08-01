
function Textarea(props) {
    return (
        <label form={props.name}>
            <textarea placeholder={props.placeholder} name={props.name} />
        </label>
    )
}

export default Textarea
