import styled from "styled-components";

const ContainerDiaSemanaStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 200px;
    padding: 0.5em;
    font-size: 1.5em;
    cursor: pointer;
    margin: 1em 0.5em;
    border: 1px solid transparent;

    && h2 {
        background-color: var(--color-primary);
        padding: 0.5em 1em;
        border-radius: 20px;
        position: absolute;
        top: -30%;
    }

    @media screen and (min-width: 900px) {
        && {
            height: auto;
            justify-content: flex-start;
            align-items: center;
            width: 170px;
            margin: 0 .5em;
        }
`;


function CardDiaSemanaNatura(props) {
    const refeicoes = props.refeicao.toString().split(",")
    const dia = props.diaSemanal.split('-')[2]
    const mes = props.diaSemanal.split('-')[1]

    return (
        <ContainerDiaSemanaStyled>
            <h2>{dia}/{mes}</h2>
            <ul>
                {refeicoes.map((refeicao) => (
                    <li key={refeicao}>{refeicao}</li>
                ))}
            </ul>
        </ContainerDiaSemanaStyled>
    )
}

export default CardDiaSemanaNatura
