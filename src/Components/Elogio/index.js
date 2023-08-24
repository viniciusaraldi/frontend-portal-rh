import ButtonCriaSugestao from '../ButtonCriaSugestao'
import TextoOpcao from '../TextoOpcao'
// import './index.css'
import PegaElogio from '../PegaElogio'

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

            <PegaElogio />
            
        </section>
    )
}

export default Elogio
