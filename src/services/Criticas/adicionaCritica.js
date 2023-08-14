import { baseUrl } from '../baseUrl.js'

async function adicionaCritica(text) {
    try {
        const recebeDados = await fetch(`${baseUrl}/criticas`, {
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

export default adicionaCritica
