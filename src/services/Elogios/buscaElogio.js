import { baseUrl } from "../baseUrl.js";

const token = localStorage.getItem("token") || []

async function geraRequisicaoElogio() {
    try {
        const dados = await fetch(`${baseUrl}/elogios/`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (dados.status === 401) {
            return console.log("Sem permissão!")
        }

        const dadosTratados = await dados.json()
        return dadosTratados
    } catch (err) {
        return console.log(err)
    }
}

export default geraRequisicaoElogio
