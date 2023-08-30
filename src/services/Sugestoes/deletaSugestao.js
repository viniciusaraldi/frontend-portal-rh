import { baseUrl } from '../baseUrl.js'

async function deletaSugestao(id, token) {
    try {
        const dados = await fetch(`${baseUrl}/sugestoes/${id}`, {
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
            message: "Erro ao deletar Sugestão",
            requisicao: false 
        }
    }
}

export default deletaSugestao
