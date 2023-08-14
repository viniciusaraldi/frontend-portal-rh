import { baseUrl } from "../baseUrl.js";

async function cadastroUsuarioAdminApi(usuario, password, role) {
    try {
        const dados = await fetch(`${baseUrl}/cadastro-usuario`, {
            method: "POST",
            body: JSON.stringify({
                usuario: usuario,
                password: password,
                role: role
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const dadosEnvio = await dados.json()
        return dadosEnvio
    } catch (err) {
        return "Erro ao enviar dados: " + err
    }
}

export default cadastroUsuarioAdminApi

