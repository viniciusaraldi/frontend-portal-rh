import './index.css'

function InputUsuario(props) {
    return (
        <label className="labelCadastroUsuario">
            <p>{props.label}</p>
            <input type={props.type} className="inputCadastroUsuario" placeholder={props.placeholder} />
        </label>
    )
}

export default InputUsuario
