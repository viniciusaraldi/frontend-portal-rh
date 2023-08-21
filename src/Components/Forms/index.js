import adicionaSugestao from "../../services/Sugestoes/adicionaSugestao.js";
import adicionaCritica from "../../services/Criticas/adicionaCritica.js";
import adicionaElogio from "../../services/Elogios/adicionaElogio.js";
import ButtonSubmit from "../ButtonSubmit";
import Textarea from "../Textarea"
import './index.css'


function Forms(props) {
    let textoDigitado = '';
    const urlFeedback = process.env.REACT_APP_API_URL;

    const handleSubmit = e => {
        e.preventDefault();
        const textoValor = e.target[0].value 
        const valorBtn = e.target[1].dataset.valuebtn
        textoDigitado = textoValor
        geraRequisicao(valorBtn)
    } 

    async function geraRequisicao(valorBtn) {
        if (valorBtn === "sugestao") {
            const req = await adicionaSugestao(textoDigitado)
            const res = await req;
            alert("Sucesso!")
            window.location.href = urlFeedback
            return res;
        } else if (valorBtn === "elogio") {
            const req = await adicionaElogio(textoDigitado)
            const res = await req;
            alert("Sucesso!")
            window.location.href = urlFeedback
            return res;
        } else if (valorBtn === "critica") {
            const req = await adicionaCritica(textoDigitado)
            const res = await req;
            alert("Sucesso!")
            window.location.href = urlFeedback
            return res;
        }
    }

    return (
        <form className="formularioSugestao" onSubmit={handleSubmit}>
            <Textarea
                placeholder={props.placeholder}
                name={props.name}
            />
            <ButtonSubmit
                type="submit"
                valueText="Enviar"
                valueBtn={props.valueBtn}
            />
        </form>
    )
}

export default Forms
