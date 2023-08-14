import { useEffect, useState } from 'react'
import geraRequisicaoElogio from '../../services/Elogios/buscaElogio.js'

function PegaElogio() {
    const [dados, setDados] = useState([])

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
    return (
        <>
            {local && (
                <div className='containerSugestaoLogado'>
                    <ul className='sugestaoApiLogado'>
                        {dados.map((dados) => (
                            <li className='sugestaoApiLogadoLista' key={dados.id}>{dados.text}</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default PegaElogio
