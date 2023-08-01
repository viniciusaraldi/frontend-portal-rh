import ButtonCriaSugestao from '../../Components/ButtonCriaSugestao'
import TextoOpcao from '../../Components/TextoOpcao'

import './index.css'

function Sugestao() {
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

        </section>
    )
}

export default Sugestao
