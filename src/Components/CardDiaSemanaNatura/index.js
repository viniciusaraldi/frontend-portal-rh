import './index.css'

function CardDiaSemanaNatura(props) {
    return (
        <div className="containerDiaSemana">
            <h2>{props.diaSemanal}</h2>
            <ul>
                <li>Salada</li>
                <li>Arroz</li>
                <li>Carne</li>
            </ul>
        </div>
    )
}

export default CardDiaSemanaNatura
