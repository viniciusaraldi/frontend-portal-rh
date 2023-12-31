import { useState } from "react";
import styled from "styled-components";
import ButtonSubmit from "../ButtonSubmit";
import Textarea from "../Textarea";
import requisicaoFeedbackPost from "../../services/Feedbacks";

const ContainerFeedbackStyled = styled.section`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 82vh;
    background-color: var(--color-primary);
    padding-top: 2em;
    color: #000;
    transition: .2s all;

    form {
        display: flex;
        padding: 0.5em 1em;
        width: 95%;
        height: 100%;
        background-color: var(--color-secondary);
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
    }
    button[name="categoria"] {
        background-color: var(--color-secondary);
        margin: 0.2em;
        padding: 0.5em 0em;
        box-shadow: 0 0px 31px 0px var(--color-primary);
        cursor: pointer;
        text-transform: uppercase;
        width: 100px;
        height: 40px;
        border-radius: 10px;
        border: 2px solid var(--color-primary);
    }
    .disable {
        display: none;
    }
    .active {
        display: inline-block;
    }
    .active button[type="submit"] {
        width: 100%;
    }
    .labelCategoria {
        padding: 1em 0;
        font-size: 1.2em;
        width: 98%;
    }
    .selecionarCategoria {
        display: flex;
        flex-direction: column;
    }
    @media screen and (min-width: 800px) {
        && {
            flex-direction: row;
            justify-content: space-around;
            height: 65vh;
            padding: 0;
        }
        .labelCategoria {
            display: flex;
            align-items:center;
        }
        .selecionarCategoria {
            flex-direction: row;
            justify-content: center;
            width: 100%;
            align-items: center;
        }
        && .selecionarCategoria > p {
            font-size: 1.5em;
            margin: 0 1em 0 -1em;
        }
    }
    @media screen and (min-width: 1400px) {
        && {
            height: 76vh;
        }
    }
`;

function FeedbackEnvia() {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('')
    const [texto, setTexto] = useState("")
    const categoriaFeedback = ['sugestão', 'elogio', 'critica'];

    const handleGeraRequisicao = async (e) => {
        e.preventDefault()
        if (categoriaSelecionada.length > 0 && texto.length > 0) {
            await requisicaoFeedbackPost(categoriaSelecionada, texto)
        }
        return window.location.href = "/feedback";
    }

    const handleClickCategoriaSelecionada = (e) => {
        e.preventDefault()
        const categoria = e.target.innerText
        setCategoriaSelecionada(categoria)
    }
    
    const handleText = e => {
        const textoEscrito = e.target.value
        setTexto(textoEscrito)
    }

    const handleDesabled = (e) => {
        setCategoriaSelecionada('')
    }

    return (
        <ContainerFeedbackStyled>
            <form className="formularioFeedback" onSubmit={handleGeraRequisicao}>
                <label htmlFor="categoria" className="labelCategoria">
                    {categoriaSelecionada === '' ? (
                        <div className="selecionarCategoria" id="categoria">
                            <p>Selecione uma categoria: </p>
                            <div>
                                {categoriaFeedback.map((categoria) => (
                                    <button type="button" className={categoriaSelecionada === '' ? "active categoria" : "disable categoria"} name="categoria" key={categoria} onClick={handleClickCategoriaSelecionada}>{categoria}</button>
                                ))}
                            </div>
                        </div>
                        ) : (
                        <div className="selecionarCategoria" onClick={handleDesabled}>
                            <ButtonSubmit
                                type="button"
                                valueText={`Categoria Selecionada: ${categoriaSelecionada}`}
                                valueBtn="button"
                                paddingValue="0.5em"
                                marginValue="0 auto"
                                fontValue="1.2em"
                                borderColor="var(--color-primary)"
                            />
                        </div>
                        )
                    }
                    
                </label>
                <div className={categoriaSelecionada === '' ? "disable" : "active "} onChange={handleText}>
                    <Textarea  
                        titulo="Envie-nos uma mensagem:"
                        name="feedback"
                        placeholder="Escreva seu feedback"
                        borderColor="var(--color-primary)"
                    />
                    <ButtonSubmit
                        type="submit"
                        valueBtn="submit"
                        valueText="Enviar"
                        backcolor="var(--color-primary)"
                        marginValue="auto"
                    />
                </div>

            </form>
        </ContainerFeedbackStyled>
    )
}

export default FeedbackEnvia
