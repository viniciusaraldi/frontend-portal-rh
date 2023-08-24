import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ButtonOpcoesRefeicao from "../../Components/ButtonOpcoesRefeicao/index.js"
import InputUsuario from "../../Components/InputUsuario/index.js"
import atualizaCardapio from "../../services/Cardapios/atualizaCardapio.js"
import buscaCardapioPorId from "../../services/Cardapios/buscaCardapioId.js"
import deletaCardapio from "../../services/Cardapios/deletaCardapio.js"
import "./index.css"

function Cardapio() {
    const [cardapios, setCardapios] = useState([])
    const [autorizacao, setAutorizacao] = useState(false)
    const [texto, setTexto] = useState("")
    const [data, setData] = useState("")
    const {id} = useParams()
    
    useEffect(() => {
        geraRequisicaoCardapio()
        localStorage.getItem("token") === false || localStorage.getItem("token") === null ? setAutorizacao(false) : setAutorizacao(true)
    }, [id])

    
    async function geraRequisicaoCardapio() {
        const dados = await buscaCardapioPorId(id)
        setCardapios([dados])
    }

    const handleClick = async (e) => {
        e.preventDefault()
        const value = e.target.dataset.value
        if (value === "confirmar") {
            const dados = await atualizaCardapio(id,data,texto)
            alert(dados.message)
            return window.location.href = "/natura";
        } else if (value === "excluir") {
            const dados = await deletaCardapio(id)
            alert(dados.message)
            return window.location.href = "/natura";
        }
    }

    const handleChange = (e) => {
        // setTexto(e.target.value)
        const tipo = e.target
        if (tipo.type === "date") {
            setData(tipo.value)
        } else if (tipo.type === "text") {
            setTexto(tipo.value)
        }
    }

    return (
        <section>
            {autorizacao === false && (
                <section className="containerCardapio">
                    <ul className="ordemCardapio">
                    {cardapios.map( (cardapio) => (
                        <div className="containerDadosAPIEstilo" key={cardapio._id}>
                            <div>
                                <h3>DATA</h3>
                                <li key={cardapio._id} className="containerDadosAPIEstiloLista">{cardapio.data}</li>
                            </div>
                            <div>
                                <h3>CARDAPIO</h3>
                                {cardapio.cardapio[0].split(",").map((alimento) => (
                                    <li key={alimento} className="containerDadosAPIEstiloLista">{alimento}</li>
                                ))}
                            </div>
                        </div>
                    ))}
                    </ul>
                </section>
            )}
            {autorizacao === true && (
                <section className="containerAtualizaDeletaCardapio">
                    <div className="containerInputAtualizaCardapio" onChange={handleChange}>
                        <InputUsuario
                            type="text"
                            label="cardapio:"
                            placeholder="Coloque o seu cardapio"
                        />
                        <InputUsuario
                            type="date"
                            label="data:"
                            placeholder="Coloque a Data do Cardapio"
                        />
                    </div>

                    <section className="containerCardapio" onClick={handleClick}>
                        <ul className="ordemCardapio">
                        {cardapios.map( (cardapio) => (
                            <>
                                <div className="containerDadosAPI" key={cardapio._id}>
                                    <div className="containerDadosAPIEstilo">
                                        <h3>CARDAPIO</h3>
                                        {cardapio.cardapio[0].split(",").map((alimento) => (
                                            <li key={alimento} className="containerDadosAPIEstiloLista">{alimento}</li>
                                        ))}
                                    </div>
                                    <div>
                                        <h3>DATA</h3>
                                        <li key={cardapio._id}>{cardapio.data.split(",")}</li>
                                    </div>

                                </div>
                                <div className="ContainerBtnAtualizaEDeleta">
                                <ButtonOpcoesRefeicao 
                                    backgroundColor="green"
                                    value="Confirmar"
                                />
                                <ButtonOpcoesRefeicao
                                    backgroundColor="red"
                                    value="Excluir"
                                />
                                </div>
                            </>
                        ))}
                        </ul>
                    </section>
                </section>
            )}

        </section>
    )
}

export default Cardapio
