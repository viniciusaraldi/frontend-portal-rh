import ButtonCriaSugestao from '../ButtonCriaSugestao'
import TextoOpcao from '../TextoOpcao'
import './index.css'
import PegaCritica from '../PegaCritica'

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

            <PegaCritica />

        </section>
    )
}

export default Critica
