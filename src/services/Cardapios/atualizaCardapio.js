import {baseUrl} from '../baseUrl.js'

async function atualizaCardapio(id,data,cardapio) {
    try {
        const token = localStorage.getItem("token")
        const dados = await fetch(`${baseUrl}/cardapios/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer "+ token,
            },
            body: JSON.stringify({
                data: data,
                cardapio: cardapio
            })
        })
        const dadosEnvio = await dados.json()
        return dadosEnvio
    } catch(err) {
        return console.log(err)
    }
}

export default atualizaCardapio
