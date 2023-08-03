import { useEffect, useState } from 'react'
import ButtonCriaSugestao from '../../Components/ButtonCriaSugestao'
import TextoOpcao from '../../Components/TextoOpcao'
import geraRequisicaoSugestao from '../../services/Sugestoes/buscaSugestoes'

import './index.css'

function Sugestao() {
    const [dados, setDados] = useState([])

    useEffect(() => {
        geraContainersSugestao()
    }, [])

    async function geraContainersSugestao() {
        const dados = await geraRequisicaoSugestao()
        setDados(dados)
    }

    // const local = localStorage.getItem("token")
    // if (!local) {
    //     return false
    // }

    return (
        <section className="containerSugestao">
            <div className="containerDiv">
                <TextoOpcao 
                    name="Sugestão"
                />
                <ButtonCriaSugestao 
                    redireciona="sugestao"
                />
            </div>
{/* 
            {local && (
                <div>
                    <ul className='sugestaoApiLogado'>
                        {dados.map((dados) => (
                            <li key={dados.id}>{dados.text}</li>
                        ))}
                    </ul>
                </div>
            )} */}

        </section>
    )
}

export default Sugestao
