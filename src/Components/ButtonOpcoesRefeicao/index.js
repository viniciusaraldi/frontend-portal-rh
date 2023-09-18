import styled from 'styled-components'

const ContainerBtnOpcoesNaturaStyled = styled.button`
    color: var(--color-white);
    padding: 1em;
    cursor: pointer;
    display: flex;
    border: none;
    border-radius: 20px;
`;

function ButtonOpcoesRefeicao(props) {


    return (
        <ContainerBtnOpcoesNaturaStyled data-value={props.datavalue.toLowerCase()} style={{backgroundColor: props.backgroundColor}} type="button">
            {props.value}
        </ContainerBtnOpcoesNaturaStyled>
        )
}

export default ButtonOpcoesRefeicao
