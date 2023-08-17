import { baseUrl } from '../baseUrl.js'

async function reseteSenha(usuario, role, password) {
    try {
        const dadosApi = await fetch(`${baseUrl}/resete-senha/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                usuario: usuario,
                role: role,
                password: password
            })
        })
        if (dadosApi.status === 404) {
            return {message: "Não encontrado"}
        } else if (dadosApi.status === 200) {
            return true
        }

        const dadosEnvio = await dadosApi.json()
        return dadosEnvio
    } catch (err) {
        return console.log(err)
    }
}

export default reseteSenha
