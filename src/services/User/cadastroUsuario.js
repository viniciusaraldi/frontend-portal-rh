import { baseUrl } from "../baseUrl.js";
import buscaRole from "../Role/buscaRole.js";

async function cadastroUsuarioAdminApi(usuario, password, role, token) {
    
    const dadosRole = await buscaRole()
    const roleVerifica = await dadosRole
    console.log(roleVerifica)

    roleVerifica.forEach( (roleVer) => {
        if (role === roleVer.role) {
            role = roleVer._id
        } else {
            return false
        }
    })

    try {
        const dados = await fetch(`${baseUrl}/cadastro-usuario`, {
            method: "POST",
            body: JSON.stringify({
                usuario: usuario,
                password: password,
                role: role
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        });
        const dadosEnvio = await dados.json()
        return dadosEnvio
    } catch (err) {
        return "Erro ao enviar dados: " + err
    }
}

export default cadastroUsuarioAdminApi

