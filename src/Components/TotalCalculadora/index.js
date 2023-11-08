import { useEffect, useState } from 'react';
import styled from 'styled-components';
import calculoCo from '../../services/Calculadora/calculo.js';

const DivTotalStyled = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 83%;
    margin: 1em auto 0 -20px;

    && >  h3 {
        border-top: 1px solid var(--color-thirty);
        width: 20%;
        padding-top: 5px;
        text-align: center;
    }
`;

function TotalCalculadora() {
    const [resultado, setResultado] = useState(null);

    useEffect(() => {
        recebeCalculo()
    }, []);

    async function recebeCalculo() {
        const info = await calculoCo()
        setResultado(info.message)
    }

    return (
        <DivTotalStyled>
            <h3>{resultado}</h3>
        </DivTotalStyled>
    )
}

export default TotalCalculadora
