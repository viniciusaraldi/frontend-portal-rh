import { baseUrl } from "../baseUrl.js";

async function buscaRole() {
    try {
        const dados = await fetch(`${baseUrl}/roles`);
        const dadosEnvio = await dados.json();
        return dadosEnvio;
    } catch (err) {
        return console.log("Erro de requisicao: " + err)
    }
}

export default buscaRole
