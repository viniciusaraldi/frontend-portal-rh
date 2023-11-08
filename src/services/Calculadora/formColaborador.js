import { baseUrl } from "../baseUrl.js";

async function formColaborador(nome, setor, copo) {
    try {
        const dadosApi = await fetch(`${baseUrl}/lista-usuario-co/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify({
                nome: nome,
                setor: setor,
                qtdeCopo: copo
            }
        )})
        const retornoApi = await dadosApi.json();
        return retornoApi;
    } catch (err) {
        return console.log(err)
    }
}

export default formColaborador
