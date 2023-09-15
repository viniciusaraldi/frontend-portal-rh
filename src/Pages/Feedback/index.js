import { useEffect, useState } from "react";
import styled from "styled-components";
import ButtonSubmit from "../../Components/ButtonSubmit";
import Textarea from "../../Components/Textarea";
import requisicaoFeedbackGet from "../../services/Feedbacks";

const ContainerFeedbackStyled = styled.section`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 90vh;
    background-color: var(--color-primary);
    padding-top: 2em;
    color: #000;
    transition: .2s all;
 
    && h2 {
        text-align: center; 
    }
    && form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 15px;
        padding: .5em 1em;
        width: 90%;
        height: 100%;
        background-color: var(--color-secondary);
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
    }
    button[name="categoria"] {
        background-color: var(--color-secondary);
        margin: 1em;
        padding: .5em 1em;
        border: none;
        box-shadow: 0 4px 8px -3px var(--color-thirty);
        cursor: pointer;
    }
    .disable {
        display: none;
    }
    .active {
        display: inline-block;
    }
    .labelCategoria {
        padding: 1em 0;
        font-size: 1.2em;
    }
    && form textarea {
        width: 80vw;
        height: 230px;
    }
    .selecionarCategoria {
        display: flex;
    }
    .selecionarCategoria > button.active {
        background: transparent;
        border: none;
        padding: .2em 1em;
        border-radius: 20px;

    }
    .selecionarCategoria > p {
        margin-right: 10px;
        padding: 0 1em;
    }
    @media screen and (min-width: 900px) {
        && {
            flex-direction: row;
            justify-content: space-around;
        }
        .labelCategoria {
            display: flex;
            align-items:center;
        }
    }
`;

function Feedback() {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState("")
    const [texto, setTexto] = useState("")
    const categoriaFeedback = ['sugestão', 'elogio', 'critica'];

    useEffect(() => {
        geraRequisicaoNovidade()
    }, [])

    async function geraRequisicaoNovidade() {
        if (categoriaSelecionada.length > 0 && texto.length > 0) {
            const dados = await requisicaoFeedbackGet(categoriaSelecionada, texto)
            return dados
        }
    }


    const handleClickCategoriaSelecionada = (e) => {
        e.preventDefault()
        console.dir(e.target)
        setCategoriaSelecionada(e.target.outerText.toString())
    }
    
    const handleText = e => {
        setTexto(e.target.value)
    }

    return (
        <ContainerFeedbackStyled>
            <h2>Digite seu Feedback:</h2>
            <form className="formularioFeedback">
                <label htmlFor="categoria" className="labelCategoria">
                    <div className="selecionarCategoria">
                        <p>Selecione uma categoria: {categoriaSelecionada}</p>
                        <button type="button" className={categoriaSelecionada.length === 0 ? "disable" : "active"}></button>
                    </div>
                    {categoriaFeedback.map((categoria) => (
                            <button type="button" className={categoriaSelecionada.length === 0 ? "active" : "disable"} name="categoria" key={categoria} onClick={handleClickCategoriaSelecionada}>{categoria}</button>
                    ))}
                    
                </label>
                <div className={categoriaSelecionada.length === 0 ? "disable" : "active"}>
                    <label onChange={handleText}>
                        <p>Envie-nos uma mensagem:</p>
                        <Textarea 
                            name="feedback"
                            placeholder="Escreva seu feedback"
                        />
                    </label>
                </div>
                <ButtonSubmit
                    type="submit"
                    valueBtn="submit"
                    valueText="Enviar"
                />

            </form>
        </ContainerFeedbackStyled>
    )
}

export default Feedback
