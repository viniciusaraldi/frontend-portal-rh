import './index.css'

function ButtonSubmit(props) {
    return (
        <>
            <button className="btnEnvio" type={props.type} data-valueBtn={props.valueBtn}>{props.valueText}</button>
        </>
    )
}

export default ButtonSubmit
