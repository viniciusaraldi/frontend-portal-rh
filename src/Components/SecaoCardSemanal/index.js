import React, { Suspense, useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import styled from "styled-components"
import buscaCardapio from "../../services/Cardapios/buscaCardapio.js"
//import CardDiaSemanaNatura from "../CardDiaSemanaNatura"

const CardDiaSemanaNatura = React.lazy(() => import("../CardDiaSemanaNatura"));

const SectionCardapioSemanalStyled = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    padding: 0 1em;
    height: 90vh;
    overflow: auto;
    background-color: var(--color-secondary);

    && a {
        display: inline-block;
        width: 100%;
        height: 455px;
        box-shadow: -15px 20px 5px var(--color-primary);
        margin: 0 2em;
        padding: 1em 0;
        border: 2px solid var(--color-primary);
        border-radius: 50px;
        position: relative;
    }

    @media screen and (min-width: 800px) {
        && {
            align-items: flex-end;
            height: 87vh;
            padding: 0 1.6em 1.6em;
        }
        && a {
            width: 100%;
            height: 390px;
            transition: .2s all;
        }
        && a:hover {
            background-color: var(--color-primary);
            color: var(--color-thirty);
        }
    }

    @media screen and (min-width: 1400px) {
        && {
            align-items: center;
        }
        && a {
            height: 400px;
            padding: 1em 1.5em;
        }
    }
`;

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
        <SectionCardapioSemanalStyled>
            {cardapios.map((cardapio) => (
                <Link to={cardapio._id} key={cardapio._id}>
                    <Suspense fallback={<div>Carregando...</div>}>
                        <CardDiaSemanaNatura key={cardapio._id} diaSemanal={cardapio.data} refeicao={cardapio.cardapio} />
                    </Suspense>
                    {/* <CardDiaSemanaNatura
                        key={cardapio._id}
                        diaSemanal={cardapio.data}
                        refeicao={cardapio.cardapio}
                    /> */}
                </Link>
            ))}
        </SectionCardapioSemanalStyled>
    )
}

export default SecaoCardSemanal
