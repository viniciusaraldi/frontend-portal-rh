import { baseUrl } from "../baseUrl.js";

async function deletaColaborador(id,qtde) {
    try {
        const dadosApi = await fetch(`${baseUrl}/lista-usuario-co/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const retornoApi = await dadosApi.json();
        return retornoApi;
    } catch (err) {
        return (err)
    }
}

export default deletaColaborador
