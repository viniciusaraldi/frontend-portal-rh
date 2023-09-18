import styled from "styled-components"

const TextareaStyled = styled.label`
    display: inline-block;
    width: 100%;

    textarea {
        width: 86vw;
        height: 350px;
        border-radius: 10px;
        border-top-right-radius: 30px;
        border: 2px solid ${props => props.bordercolor ? props.bordercolor : 'var(--color-secondary)'};
    }
    textarea::placeholder {
        padding: .5em;
    }
`;

function Textarea(props) {
    return (
        <TextareaStyled form={props.name} bordercolor={props.borderColor}>
            <p>{props.titulo}</p>
            <textarea placeholder={props.placeholder} name={props.name} />
        </TextareaStyled>
    )
}

export default Textarea
