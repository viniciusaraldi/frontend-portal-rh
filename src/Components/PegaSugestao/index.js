import { useEffect, useState } from 'react'
import geraRequisicaoSugestao from '../../services/Sugestoes/buscaSugestoes'
import deletaSugestao from '../../services/Sugestoes/deletaSugestao.js'
import ButtonOpcoesRefeicao from '../ButtonOpcoesRefeicao'
import './index.css'

function PegaSugestao() {
    const [dados, setDados] = useState([])
    const token = localStorage.getItem("token") || []

    useEffect(() => {
        geraContainersSugestao()
    }, [])

    async function geraContainersSugestao() {
        const dados = await geraRequisicaoSugestao()
        setDados(dados)
    }

    const local = localStorage.getItem("token")
    if (!local) {
        return false
    }

    const handleDelete = async (e) => {
        const idSugestao = e.target.dataset.value
        if (idSugestao !== undefined) {
            const deleta = await deletaSugestao(idSugestao, token)
            if (deleta.requisicao === true) {
                alert(deleta.message)
                setDados((novosDados) => novosDados.filter((item) => item._id !== idSugestao))
            }  else {
                alert("Erro ao deletar Sugestão!")
            }
        } 
    }

    return (
        <>
            {local && dados !== false && (
                <div className='containerSugestaoLogado'>
                    <ul className='sugestaoApiLogado'>
                        {dados.map((dados) => (
                            <li onClick={handleDelete} className='sugestaoApiLogadoLista' key={dados._id}>
                                <div className='sugestaoApiLogadoListaDados'>
                                    <p>{dados.text}</p>
                                    <ButtonOpcoesRefeicao
                                        datavalue={dados._id}
                                        value={(<i className="fa-solid fa-delete-left" data-value={dados._id}></i>)}
                                        backgroundColor="red"
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default PegaSugestao
