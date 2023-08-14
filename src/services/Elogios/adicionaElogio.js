import { baseUrl } from '../baseUrl.js'

async function adicionaElogio(text) {
    try {
        const recebeDados = await fetch(`${baseUrl}/elogios`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: text
            })
        })
        const dadosRetornados = await recebeDados?.json()
        return dadosRetornados
    } catch (err) {
        console.log(err)
    }

}

export default adicionaElogio
