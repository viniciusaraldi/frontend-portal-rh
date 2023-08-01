import ButtonCriaSugestao from '../../Components/ButtonCriaSugestao'
import TextoOpcao from '../../Components/TextoOpcao'

import './index.css'

function Elogio() {
    return (
        <section className="containerSugestao">
            <div className="containerDiv">
                <TextoOpcao 
                    name="Elogio"
                />
                <ButtonCriaSugestao 
                    redireciona="elogio"
                />
            </div>

        </section>
    )
}

export default Elogio
