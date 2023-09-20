import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import ButtonOpcoesRefeicao from "../../Components/ButtonOpcoesRefeicao/index.js"
import InputUsuario from "../../Components/InputUsuario/index.js"
import atualizaCardapio from "../../services/Cardapios/atualizaCardapio.js"
import buscaCardapioPorId from "../../services/Cardapios/buscaCardapioId.js"
import deletaCardapio from "../../services/Cardapios/deletaCardapio.js"

const SectionCardapioDiarioStyled = styled.section`
    background: var(--color-secondary);
    height: 91vh;
    overflow-y: hidden;

    .ordemCardapio {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .ContainerBtnAtualizaEDeleta {
        display: flex;
        justify-content: space-between;
        width: 250px;
        padding: 1em;
        margin-top: 2em;
    }
    .containerDadosAPI {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .containerDadosAPIEstilo {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        margin: 1em;
    }
    .concontainerDadosAPIEstiloInfos {
        width: auto;
        height: auto;
        box-shadow: -15px 20px 5px var(--color-primary);
        margin: .5em 1em;
        padding: 1em;
        border: 2px solid var(--color-primary);
        border-radius: 20px;
        text-align: start;
        position: relative;
    }
    .containerDadosAPIEstiloDate {
        text-align: center;
        background: var(--color-primary);
        width: 70%;
        margin: 1em auto;
        border-radius: 20px;
        position: relative;
    }
    .containerDadosAPIEstiloDate button, .concontainerDadosAPIEstiloInfos button {
        background: var(--color-primary);
        padding: .3em;
        border: 1px solid;
        border-radius: 20px;
        position: absolute;
        top: -15px;
        right: -10px;
    }
    .containerDadosAPIEstiloLista {
        width: auto;
        font-size: 1.3em;
        margin: .3em .5em;
    }
    .containerDadosAPIEstiloLista.active {
        display: flex;
    }
    .containerDadosAPIEstiloLista.disable {
        display: none;
    }

    @media screen and (min-width: 800px) {
        .containerDadosAPIEstiloDate button, .concontainerDadosAPIEstiloInfos button {
            cursor: pointer;
        }
    }
    `;

const ContainerCardapioStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em;
    font-size: 1em;
    margin: 1em 0.5em;
    border: 1px solid transparent;
`;

function Cardapio() {
    const [cardapios, setCardapios] = useState([])
    const [autorizacao, setAutorizacao] = useState(false)
    const [activeDate,setActiveDate] = useState(false)
    const [activeCardapio,setActiveCardapio] = useState(false)
    const [texto, setTexto] = useState("")
    const [data, setData] = useState("")
    const {id} = useParams()
    
    useEffect(() => {
        geraRequisicaoCardapio()
        localStorage.getItem("token") === 'false' || localStorage.getItem("token") === null ? setAutorizacao(false) : setAutorizacao(true)
    }, [id])

    
    async function geraRequisicaoCardapio() {
        const dados = await buscaCardapioPorId(id)
        setCardapios([dados])
    }

    const handleClick = async (e) => {
        e.preventDefault()
        const value = e.target.dataset.value
        if (value === "confirmar") {
            await atualizaCardapio(id,data,texto)
            return window.location.href = "/restaurante";
        } else if (value === "excluir") {
            await deletaCardapio(id)
            return window.location.href = "/restaurante";
        }
    }

    const handleChange = (e) => {
        if (e.target.type === "date") {
            setData(e.target.value)
        } else if (e.target.type === "text") {
            setTexto(e.target.value)
        }
    }

    const handleClickEditDatas = () => {     
        setActiveDate(!activeDate)
    }

    const handleClickEditCardapio = () => {
        setActiveCardapio(!activeCardapio)
    }

    return (
        <SectionCardapioDiarioStyled>
            {
            autorizacao === false ? (
                    <ContainerCardapioStyled>

                        <ul className="ordemCardapio">
                        {cardapios.map( (cardapio) => (
                            <div className="containerDadosAPIEstilo" key={cardapio._id}>
                                <div className="containerDadosAPIEstiloDate">
                                    <li key={cardapio._id} className="containerDadosAPIEstiloLista">{cardapio.data}</li>
                                </div>
                                <div className="concontainerDadosAPIEstiloInfos">
                                    {cardapio.cardapio[0].split(",").map((alimento) => (
                                        <li key={alimento} className="containerDadosAPIEstiloLista">{alimento}</li>
                                    ))}
                                </div>
                            </div>
                        ))}
                        </ul>

                    </ContainerCardapioStyled>
                ) 
            :
                (
                <ContainerCardapioStyled>

                    <ul className="ordemCardapio">
                    {cardapios.map( (cardapio) => (
                        <div className="containerDadosAPIEstilo" key={cardapio._id}>

                            <div className="containerDadosAPIEstiloDate">
                                <li key={cardapio._id} className="containerDadosAPIEstiloLista">{cardapio.data}</li>
                                <li key={cardapio._v} className={`containerDadosAPIEstiloLista ${activeDate ? 'active' : 'disable'}`} onChange={handleChange}>
                                    <InputUsuario
                                        type="date"
                                        label="data:"
                                        placeholder="Coloque a Data do Cardapio"
                                    />
                                </li>
                                <button onClick={handleClickEditDatas} data-datas="data">
                                    <i className="fa-solid fa-pen" data-datas="data"></i>
                                </button>
                            </div>

                            <div className="concontainerDadosAPIEstiloInfos">
                                <button onClick={handleClickEditCardapio} data-cardapios="cardapios">
                                    <i className="fa-solid fa-pen" data-cardapios="cardapios"></i>
                                </button>
                                <li key={cardapio._v} className={`containerDadosAPIEstiloLista ${activeCardapio ? 'active' : 'disable'}`} onChange={handleChange}>
                                    <InputUsuario
                                        type="text"
                                        label="cardapio:"
                                        placeholder="Coloque o seu cardapio"
                                    />
                                </li>
                                {cardapio.cardapio[0].split(",").map((alimento) => (
                                    <li key={alimento} className={`containerDadosAPIEstiloLista`}>{alimento}</li>
                                    
                                ))}
                            </div>

                            <div className="containerCardapio" onClick={handleClick}>
                                <ul className="ordemCardapio">
                                    <div className="ContainerBtnAtualizaEDeleta">
                                        <ButtonOpcoesRefeicao
                                            datavalue="Confirmar"
                                            backgroundColor="#5cb85c"
                                            value="Confirmar"
                                        />
                                        <ButtonOpcoesRefeicao
                                            datavalue="Excluir"
                                            backgroundColor="#d9534f"
                                            value="Excluir"
                                        />
                                    </div>
                                </ul>
                            </div>

                        </div>
                    ))}
                    </ul>
                </ContainerCardapioStyled>
            )}

        </SectionCardapioDiarioStyled>
    )
}

export default Cardapio