import { useEffect, useState } from 'react';
import styled from 'styled-components';
import calculoCo from '../../services/Calculadora/calculo.js';

const DivCalculadoraStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5em;
`;

const TituloStyled = styled.h3`
    text-transform: uppercase;
    text-align: center;

    @media screen and (max-width: 500px) {
        padding: 0 .5em;
    }    
`;

function SubtituloCalculadora() {
    const [emissao, setEmissao] = useState("")
    
    useEffect(() => {
        recebeRequisicao()
    }, [])

    async function recebeRequisicao() {
        const dadosApi = await calculoCo()
        setEmissao(dadosApi.dados)
    }

    return (
        <DivCalculadoraStyled>
            <TituloStyled>Até agora foi deixado de ser emitido {emissao * 24} gramas de CO2</TituloStyled>
        </DivCalculadoraStyled>
    )
}

export default SubtituloCalculadora
