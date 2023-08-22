import './index.css'

function CardDiaSemanaNatura(props) {
    const refeicoes = props.refeicao.toString().split(",")
    const dia = props.diaSemanal.split('-')[2]
    const mes = props.diaSemanal.split('-')[1]

    return (
        <div className="containerDiaSemana">
            <h2>{dia}/{mes}</h2>
            <ul>
                {refeicoes.map((refeicao) => (
                    <li key={refeicao}>{refeicao}</li>
                ))}
            </ul>
        </div>
    )
}

export default CardDiaSemanaNatura
