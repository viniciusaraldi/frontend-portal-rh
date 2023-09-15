import styled from "styled-components"

const LabelStyled = styled.label`
    width: 100%;
    font-size: 1.5em;
    padding: .5em;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;

    && > input {
        width: 100%;
        padding: 1em;
        border: none;
        background: transparent;
        margin: 0.5em 0;
        border-bottom: 2px solid var(--color-thirty);
        font-weight: bold;
        text-transform: uppercase;
    }
    && > input::placeholder {
        color: var(--color-thirty);
    }

    @media screen and (min-width: 900px) {
            && {
                justify-content: center;
            }
            && > input {
                width: 90%;
                padding: .5em 0;
            }
        }
`;

function InputUsuario(props) {
    return (
        <LabelStyled htmlFor={props.label}>
            <input type={props.type} name={props.label} placeholder={props.placeholder} />
        </LabelStyled>
    )
}

export default InputUsuario
