import { baseUrl } from '../baseUrl.js'

async function geraRequisicaoUsuario(usuario, password) {
    const dados = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            usuario: usuario,
            password: password
        })
    });
    const dadosTratados = await dados.json();
    return dadosTratados.message
}

export default geraRequisicaoUsuario
