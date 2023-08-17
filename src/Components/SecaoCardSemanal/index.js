import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import buscaCardapio from "../../services/Cardapios/buscaCardapio.js"
import CardDiaSemanaNatura from "../CardDiaSemanaNatura"
import './index.css'

function SecaoCardSemanal() {
    const [cardapios, setCardapios] = useState([]);

    useEffect(() => {
        geraRequisicaoCardapio()
    }, [])

    async function geraRequisicaoCardapio() {
        const cardapioApi = await buscaCardapio()
        setCardapios(cardapioApi)
    }

    return (
        <section className='containerSemana'>
            {cardapios.map((cardapio) => (
                <Link to={cardapio._id} key={cardapio._id}>
                    <CardDiaSemanaNatura
                        key={cardapio._id}
                        diaSemanal={cardapio.data}
                        refeicao={cardapio.cardapio}
                    />
                </Link>
            ))}
        </section>
    )
}

export default SecaoCardSemanal
