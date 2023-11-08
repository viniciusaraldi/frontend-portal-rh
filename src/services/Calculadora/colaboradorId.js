import { baseUrl } from "../baseUrl.js";

async function colaboradoresPorId(id) {
    try {
        const dadosApi = await fetch(`${baseUrl}/lista-usuario-co/${id}`)
        if (dadosApi.status === 404) {
            return dadosApi.statusText
        }
        const retornoApi = await dadosApi.json();
        return retornoApi;
    } catch (err) {
        return err.message
    }
}

export default colaboradoresPorId
