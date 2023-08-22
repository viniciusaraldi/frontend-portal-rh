import './index.css'

function ButtonSubmit(props) {
    return (
        <>
            <button className="btnEnvio" type={props.type} data-valuebtn={props.valueBtn}>{props.valueText}</button>
        </>
    )
}

export default ButtonSubmit
