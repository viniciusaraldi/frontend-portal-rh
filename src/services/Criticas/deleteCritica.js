import { baseUrl } from '../baseUrl.js'

async function deletaCritica(id, token) {
    try {
        const dados = await fetch(`${baseUrl}/criticas/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        });
        const dadosEnvio = await dados.json()
        return {
            message: "deletado com sucesso",
            requisicao: true,
            dados: dadosEnvio
        }
    } catch (err) {
        return {
            message: "Erro ao deletar Critica",
            requisicao: false 
        }
    }
}

export default deletaCritica