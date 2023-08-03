import './index.css'

function ButtonSubmit(props) {
    return (
        <>
            <button className="btnEnvio" type={props.type}>Enviar</button>
        </>
    )
}

export default ButtonSubmit
