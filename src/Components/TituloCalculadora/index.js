import styled from 'styled-components';

const DivCalculadoraStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1em;
`;

const TituloStyled = styled.h2`
    text-transform: uppercase;
`;

const DivisorFirstStyled = styled.div`
    background: var(--color-secondary);
    height: 2px;
    width: 25%;
    margin-top: 5px;
`;

const DivisorSecondaryStyled = styled.div`
    background: var(--color-secondary);
    height: 2px;
    width: 15%;
    margin-top: 10px;
`;



function TituloCalculadora() {
    return (
        <DivCalculadoraStyled>
            <TituloStyled>Bem-vindo a Calculadora de Emissão de CO2</TituloStyled>
            <DivisorFirstStyled></DivisorFirstStyled>
            <DivisorSecondaryStyled></DivisorSecondaryStyled>
        </DivCalculadoraStyled>
    )
}

export default TituloCalculadora
