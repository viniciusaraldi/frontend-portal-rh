import './index.css'

function ButtonOpcoesRefeicao(props) {


    return (
        <div className='containerBtnOpcoesNatura'>
            <button data-value={props.value.toLowerCase()} style={{backgroundColor: props.backgroundColor}} className="btnEnvio" type="button">{props.value}</button>
        </div>
        )
}

export default ButtonOpcoesRefeicao
