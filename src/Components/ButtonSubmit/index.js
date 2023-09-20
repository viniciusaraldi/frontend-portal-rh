import styled from "styled-components";

    const ButtonLoginStyled = styled.button`
        padding: ${props => props.padding ? props.padding : '1em 2em'};
        font-size: ${props => props.font ? props.font : '1em'};
        border: 2px solid ${props => props.bordercolor ? props.bordercolor : 'var(--color-secondary)'};
        width: auto;
        background-color: ${props => props.backcolor ? props.backcolor : 'var(--color-secondary)'};
        color: var(--color-thirty);
        cursor: pointer;
        border-radius: 20px;
        margin: ${props => props.margin ? props.margin : "0 .5em"};
        color: var(--color-thirty);

        &&:hover, &&:active {
            border: 2px solid var(--color-primary);
        }
        @media screen and (min-width: 800px) {
            && {
                width: 40%;
            }
        }
    `;

function ButtonSubmit(props) {

    return (
        <ButtonLoginStyled type={props.type} data-valuebtn={props.valueBtn} backcolor={props.backcolor} bordercolor={props.borderColor} font={props.fontValue} padding={props.paddingValue} margin={props.marginValue}>
            {props.valueText}
        </ButtonLoginStyled>
    )
}

export default ButtonSubmit
