import './index.css'

function CardDiaSemanaNatura(props) {
    const refeicoes = props.refeicao.toString().split(",")
    const date = new Date(props.diaSemanal)

    return (
        <div className="containerDiaSemana">
            <h2>{date.getDate() + 1}/{date.getMonth()+1}</h2>
            <ul>
                {refeicoes.map((refeicao) => (
                    <li key={refeicao}>{refeicao}</li>
                ))}
            </ul>
        </div>
    )
}

export default CardDiaSemanaNatura
