import { baseUrl } from "../baseUrl.js";

async function atualizaColaborador(id,qtde) {
    try {
        const dadosApi = await fetch(`${baseUrl}/lista-usuario-co/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify({
                qtdeCopo: qtde
            })
        })
        const retornoApi = await dadosApi.json();
        return retornoApi;
    } catch (err) {
        return (err)
    }
}

export default atualizaColaborador
