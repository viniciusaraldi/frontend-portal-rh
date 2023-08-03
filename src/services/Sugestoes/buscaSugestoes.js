import { baseUrl } from "../baseUrl.js";

const token = localStorage.getItem("token") || []

async function geraRequisicaoSugestao() {
    try {
        const dados = await fetch(`${baseUrl}/sugestoes`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const dadosTratados = await dados.json()
        return dadosTratados
    } catch (err) {
        return console.log(err)
    }
}

export default geraRequisicaoSugestao
