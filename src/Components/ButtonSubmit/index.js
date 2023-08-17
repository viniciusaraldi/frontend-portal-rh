import './index.css'

function ButtonSubmit(props) {
    return (
        <>
            <button className="btnEnvio" type={props.type}>{props.valueText}</button>
        </>
    )
}

export default ButtonSubmit
