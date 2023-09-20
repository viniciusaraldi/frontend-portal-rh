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
    && > p {
        font-size: 1.2em;
        text-align:center;
        margin: .5em 0;
    }
    
    @media screen and (min-width: 800px) {
        && {
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin: .5em 0;
        }
        && textarea {
            margin: 0 auto;
            width: 80vw;
            height: 200px;
            background-color: var(--color-primary);
            color: var(--color-thirty);
            padding: 1em;
        }
    }
    
    @media screen and (min-width: 1000px) {
        && textarea {
            height: 50vh;
        }
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
