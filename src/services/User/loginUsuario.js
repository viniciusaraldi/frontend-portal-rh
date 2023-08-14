import { baseUrl } from '../baseUrl.js'

async function geraRequisicaoUsuario(usuario, password) {
    console.log(usuario,password)
    const dados = await fetch(`${baseUrl}/login/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            usuario: usuario,
            password: password
        })
    });

    if(dados.ok) {
        const dadosTratados = await dados.json();
        return dadosTratados.message
    } else {
        console.log("Erro de Login: " + dados.statusText)
        throw new Error('Erro de requisicao')
    }
}

export default geraRequisicaoUsuario
