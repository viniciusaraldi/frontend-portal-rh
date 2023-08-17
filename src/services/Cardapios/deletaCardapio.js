import {baseUrl} from '../baseUrl.js'

async function deletaCardapio(id) {
    try {
        const token = localStorage.getItem("token")
        const dados = await fetch(`${baseUrl}/cardapios/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer "+token,
            }
        })
        const dadosEnvio = await dados.json()
        return dadosEnvio
    } catch (err) {
        return console.log(err)
    }
}

export default deletaCardapio
