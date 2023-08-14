import { useEffect, useState } from 'react'
import geraRequisicaoCritica from '../../services/Criticas/buscaCritica.js'

function PegaCritica() {
    const [dados, setDados] = useState([])

    useEffect(() => {
        geraContainersCritica()
    }, [])

    async function geraContainersCritica() {
        const dados = await geraRequisicaoCritica()
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

export default PegaCritica
