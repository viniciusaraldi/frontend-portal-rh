import ButtonCriaSugestao from '../../Components/ButtonCriaSugestao'
import TextoOpcao from '../../Components/TextoOpcao'

import './index.css'

function Critica() {
    return (
        <section className="containerSugestao">
            <div className="containerDiv">
                <TextoOpcao 
                    name="Critica"
                />
                <ButtonCriaSugestao 
                    redireciona="critica"
                />
            </div>

        </section>
    )
}

export default Critica
