import './index.css'
import styled from "styled-components";

function ButtonSubmit(props) {

    const ButtonLoginStyled = styled.button`
        padding: 1em 2em;
        border: 1px solid transparent;
        width: auto;
        background-color: ${props => props.backcolor ? props.backcolor : 'var(--color-secondary)'};
        color: var(--color-thirty);
        cursor: pointer;

        &&:hover {
            border: 1px solid var(--color-primary);
        }
        @media screen and (min-width: 900px) {
            && {
                width: 40%;
            }
        }
    `;

    return (
        <ButtonLoginStyled type={props.type} data-valuebtn={props.valueBtn} backcolor={props.backcolor}>
            {props.valueText}
        </ButtonLoginStyled>
    )
}

export default ButtonSubmit
