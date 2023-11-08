import { baseUrl } from "../baseUrl.js";

async function colaboradores() {
    try {
        const dadosApi = await fetch(`${baseUrl}/lista-usuario-co/`)
        if (dadosApi.status === 404) {
            return dadosApi.statusText
        }
        const retornoApi = await dadosApi.json();
        return retornoApi;
    } catch (err) {
        return console.log(err.message)
    }
}

export default colaboradores
