import adicionaSugestao from "../../services/Sugestoes/adicionaSugestao.js";
import adicionaCritica from "../../services/Criticas/adicionaCritica.js";
import adicionaElogio from "../../services/Elogios/adicionaElogio.js";
import ButtonSubmit from "../ButtonSubmit";
import Textarea from "../Textarea"
import './index.css'


function Forms(props) {
    let textoDigitado = '';
    const urlFeedback = "http://localhost:3001/feedback";

    const handleSubmit = e => {
        e.preventDefault();
        const textoValor = e.target[0].value 
        textoDigitado = textoValor
        geraRequisicao()
    } 

    async function geraRequisicao() {
        if (window.location.href === `${process.env.REACT_APP_API_URL}/cria-sugestao`) {
            console.log(process.env.REACT_APP_API_URL)
            const req = await adicionaSugestao(textoDigitado)
            const res = await req;
            alert("Sucesso!")
            window.location.href = urlFeedback
            return res;
        } else if (window.location.href === `${process.env.REACT_APP_API_URL}/cria-elogio`) {
            const req = await adicionaElogio(textoDigitado)
            const res = await req;
            alert("Sucesso!")
            window.location.href = urlFeedback
            return res;
        } else if (window.location.href === `${process.env.REACT_APP_API_URL}/cria-critica`) {
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
            />
        </form>
    )
}

export default Forms
