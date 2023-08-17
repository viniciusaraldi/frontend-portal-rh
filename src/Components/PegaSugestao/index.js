import { useEffect, useState } from 'react'
import geraRequisicaoSugestao from '../../services/Sugestoes/buscaSugestoes'
import './index.css'

function PegaSugestao() {
    const [dados, setDados] = useState([])

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

    return (
        <>
            {local && dados !== false && (
                <div className='containerSugestaoLogado'>
                    <ul className='sugestaoApiLogado'>
                        {dados.map((dados) => (
                            <li className='sugestaoApiLogadoLista' key={dados._id}>{dados.text}</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default PegaSugestao
