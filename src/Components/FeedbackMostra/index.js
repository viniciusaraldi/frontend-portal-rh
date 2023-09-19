import { useEffect, useState } from "react";
import styled from "styled-components"
import requisicaoFeedbackDelete from "../../services/Feedbacks/Delete.js";
import requisicaoFeedbackGet from "../../services/Feedbacks/Get.js";
import ButtonSubmit from "../ButtonSubmit/index.js";

const ContainerFeedbackMostraStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 82vh;
    background-color: var(--color-primary);
    padding-top: 2em;
    color: #000;
    transition: .2s all;

    .overflow {
        overflow-y: auto;
    }
    .overflow ul {
        width: 95%;
        margin: 1em 0;
        padding: .5em;
    }
    .overflow ul li {
        height: auto;
        margin: 1em 0;
        padding: 1em 0.5em;
        box-shadow: -4px 8px 0px var(--color-primary);
        border-radius: 20px;
        position: relative;
    }

    .overflow ul li button {
        width: auto;
        position: absolute;
        top: -15px;
        right: -15px;
        border: 1px solid;
        padding: .3em .5em;
        margin: 0;
        background-color: var(--color-primary);
    }
    .overflow ul li button > i {
        color: var(--color-thirty);
    }
    div.ContainerCategoriaLogado {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    && > div {
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
    button[type="button"] {
        background-color: var(--color-secondary);
        margin: 0.5em 0;
        padding: 0.5em 0em;
        box-shadow: -4px 4px 0px 0px var(--color-primary);
        cursor: pointer;
        text-transform: uppercase;
        width: 100px;
        height: 40px;
        border-radius: 10px;
        border: 2px solid var(--color-primary);
    }
`;

function FeedbackMostra() {
    const [feedEnviados, setFeedEnviados] = useState([])
    const [autorizacao, setAutorizacao] = useState(false)
    const [feedFiltrados, setFeedFiltrados] = useState([])
    const token = localStorage.getItem("token")
    const opcoes = ['sugestão','elogio', 'critica']


    useEffect(() => {
        localStorage.getItem("token") === false || localStorage.getItem("token") === null ? setAutorizacao(false) : setAutorizacao(true)
        geraRequisicaoFeedback()
    }, [])

    async function geraRequisicaoFeedback() {
        const dados = await requisicaoFeedbackGet(token)
        setFeedEnviados(dados)
    }

    const handleExcluiFeedback = async e => {
        const tipo = e.target.dataset.valuebtn
        const deleta = await requisicaoFeedbackDelete(token, tipo)
        setFeedEnviados((newDados) => newDados.filter((item) => item._id !== tipo))
        return deleta
    }

    const handleSeparaCategorias = (e) => {
        setFeedFiltrados(feedEnviados.filter((item) => item.categorias === e.target.dataset.valuebtn.toUpperCase()))

    }

    return (
        <ContainerFeedbackMostraStyled>
            {autorizacao && (
                <div className="overflow">
                    <h2>Selecione uma categoria:</h2>
                    <div className="ContainerCategoriaLogado" onClick={handleSeparaCategorias}>
                        {opcoes.map((opcao) => (
                            <ButtonSubmit
                                type="button"
                                valueBtn={opcao}
                                valueText={opcao}
                                paddingValue=".5em 0"
                                borderColor="var(--color-primary)"
                                key={opcoes.indexOf(opcao)}
                            />
                        ))}
                    </div>
                    <ul className="ContainerCategoriaLogado" onClick={handleExcluiFeedback}>
                            {feedFiltrados.length === 0 ? feedEnviados.map((feed) => (
                                <li key={feed._id}>
                                    <p>{feed.categorias}</p>
                                    <p>{feed.feedbacks}</p>
                                    <ButtonSubmit
                                        type="button"
                                        valueBtn={feed._id}
                                        valueText={(<i data-valuebtn={feed._id} className="fa-solid fa-xmark"></i>)}
                                    />
                                </li>
                            )): feedFiltrados.map((feed) => (
                                <li key={feed._id}>
                                    <p>{feed.categorias}</p>
                                    <p>{feed.feedbacks}</p>
                                    <ButtonSubmit
                                        type="button"
                                        valueBtn={feed._id}
                                        valueText={(<i data-valuebtn={feed._id} className="fa-solid fa-xmark"></i>)}
                                    />
                                </li>)
                                )
                            }
                    </ul>
                </div>

            )}
        </ContainerFeedbackMostraStyled>
    )
}

export default FeedbackMostra
