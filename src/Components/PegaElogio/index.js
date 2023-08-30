import { useEffect, useState } from 'react'
import geraRequisicaoElogio from '../../services/Elogios/buscaElogio.js'
import deletaElogio from '../../services/Elogios/deleteElogio.js'
import ButtonOpcoesRefeicao from '../ButtonOpcoesRefeicao/index.js'

function PegaElogio() {
    const [dados, setDados] = useState([])
    const token = localStorage.getItem("token") || []

    useEffect(() => {
        geraContainersElogio()
    }, [])

    async function geraContainersElogio() {
        const dados = await geraRequisicaoElogio()
        setDados(dados)
    }

    const local = localStorage.getItem("token")
    if (!local) {
        return false
    }

    const handleDelete = async (e) => {
        const idElogio = e.target.dataset.value
        if (idElogio !== undefined) {
            const deleta = await deletaElogio(idElogio, token)
            if (deleta.requisicao === true) {
                alert(deleta.message)
                setDados((novosDados) => novosDados.filter((item) => item._id !== idElogio))
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

export default PegaElogio
