import { baseUrl } from '../baseUrl.js'

async function adicionaSugestao(text) {
    try {
        const recebeDados = await fetch(`${baseUrl}/sugestoes`, {
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

export default adicionaSugestao
