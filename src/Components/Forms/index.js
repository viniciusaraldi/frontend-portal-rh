import adicionaSugestao from "../../services/adicionaSugestao";
import adicionaCritica from "../../services/adicionaCritica";
import adicionaElogio from "../../services/adicionaElogio";
import ButtonSubmit from "../ButtonSubmit";
import Textarea from "../Textarea"
import './index.css'


function Forms(props) {
    let textoDigitado = ''

    const handleSubmit = e => {
        e.preventDefault();
        const textoValor = e.target[0].value 
        textoDigitado = textoValor
        geraRequisicao()
    } 

    async function geraRequisicao() {
        if (window.location.href === "http://localhost:3001/cria-sugestao") {
            const req = await adicionaSugestao(textoDigitado)
            const res = await req;
            alert("Sucesso!")
            window.location.href = "http://localhost:3001/sugestao"
            return res;
        } else if (window.location.href === "http://localhost:3001/cria-elogio") {
            const req = await adicionaElogio(textoDigitado)
            const res = await req;
            alert("Sucesso!")
            window.location.href = "http://localhost:3001/elogio"
            return res;
        } else if (window.location.href === "http://localhost:3001/cria-critica") {
            const req = await adicionaCritica(textoDigitado)
            const res = await req;
            alert("Sucesso!")
            window.location.href = "http://localhost:3001/critica"
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
            />
        </form>
    )
}

export default Forms
